import { useState, useEffect } from "react";
import AvailabilityList from "../components/Scheduler/AvailabilityList";
import Booking from "../components/Scheduler/Booking";
import "../styles/Scheduler/PickupScheduler.css";

type Item = { id: string; name: string; quantity: number };
type BookingType = {
  id: string;
  itemId?: string;
  name: string;
  quantity: number;
  pickupTime: string;
};

export default function PickupScheduler() {
  const [items, setItems] = useState<Item[]>([]);
  const [pendingPickups, setPendingPickups] = useState<BookingType[]>([]);
  const [completedPickups, setCompletedPickups] = useState<BookingType[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [newQty, setNewQty] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then(r => r.json())
      .then(setItems);
    fetch("http://localhost:4000/pending")
      .then(r => r.json())
      .then(setPendingPickups);
    fetch("http://localhost:4000/completed")
      .then(r => r.json())
      .then(setCompletedPickups);
  }, []);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName, quantity: newQty })
    })
      .then(r => r.json())
      .then(item => {
        setItems(prev => [...prev, item]);
        setNewName("");
        setNewQty(0);
      })
      .catch(console.error);
  };

  const handleBooking = (id: string) => {
    setSelectedItemId(id);
  };

  const handleBookingConfirmation = (itemId: string, pickupTime: string) => {
    fetch("http://localhost:4000/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemId, pickupTime })
    })
      .then(r => r.json())
      .then(booking => {
        setItems(i => i.filter(x => x.id !== itemId));
        setPendingPickups(p => [...p, booking]);
        setSelectedItemId(null);
      })
      .catch(console.error);
  };

  const handleCloseBooking = () => {
    setSelectedItemId(null);
  };

  const handleCompletePickup = (bookingId: string) => {
    fetch("http://localhost:4000/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId })
    })
      .then(r => r.json())
      .then(completed => {
        setPendingPickups(p => p.filter(x => x.id !== bookingId));
        setCompletedPickups(c => [...c, completed]);
      })
      .catch(console.error);
  };

  return (
    <>
      <form onSubmit={handleAddItem} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Item name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newQty}
          onChange={e => setNewQty(+e.target.value)}
          required
          min={1}
        />
        <button type="submit">Add Item</button>
      </form>

      <div className="container">
        <div className="column">
          <AvailabilityList items={items} onBook={handleBooking} />
          {selectedItemId && (
            <Booking
              itemId={selectedItemId}
              onClose={handleCloseBooking}
              onConfirm={handleBookingConfirmation}
              availableSlots={["10:00 AM", "11:00 AM", "12:00 PM"]}
            />
          )}
        </div>

        <div className="column pending-column">
          <h2>Pending Pickups</h2>
          {pendingPickups.length === 0 ? (
            <p>No pending pickups</p>
          ) : (
            <ul>
              {pendingPickups.map(p => (
                <li key={p.id}>
                  {p.name} – {p.pickupTime}{" "}
                  <button onClick={() => handleCompletePickup(p.id)}>
                    Complete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="column completed-column">
          <h2>Completed Pickups</h2>
          {completedPickups.length === 0 ? (
            <p>No completed pickups</p>
          ) : (
            <ul>
              {completedPickups.map(p => (
                <li key={p.id}>
                  {p.name} – {p.pickupTime}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
