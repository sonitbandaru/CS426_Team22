import { useState } from "react";
import AvailabilityList from "../components/Scheduler/AvailabilityList";
import Booking from "../components/Scheduler/Booking";
import "../styles/Scheduler/PickupScheduler.css";

const PickupScheduler = () => {
  const [items, setItems] = useState([
    { id: "1", name: "Steak", quantity: 5 },
    { id: "2", name: "Bread", quantity: 10 },
    { id: "3", name: "Eggs", quantity: 5 },
    { id: "4", name: "Cake", quantity: 10 },
    { id: "5", name: "Soda", quantity: 5 },
    { id: "6", name: "Stirfry", quantity: 10 },
    { id: "7", name: "Chicken Roast", quantity: 5 },
    { id: "8", name: "Tikka Massala", quantity: 10 },
    { id: "9", name: "Mushroom Soup", quantity: 5 },
    { id: "10", name: "Sourdough", quantity: 10 },
  ]);

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  // Pending & completed states
  const [pendingPickups, setPendingPickups] = useState<
    { id: string; name: string; quantity: number; pickupTime: string }[]
  >([]);
  const [completedPickups, setCompletedPickups] = useState<
    { id: string; name: string; quantity: number; pickupTime: string }[]
  >([]);

  const handleBooking = (id: string) => {
    setSelectedItemId(id);
  };

  const handleCloseBooking = () => {
    setSelectedItemId(null);
  };

  const handleBookingConfirmation = (itemId: string, pickupTime: string) => {
    console.log(`Booking confirmed for item ${itemId} at ${pickupTime}`);
    const bookedItem = items.find((item) => item.id === itemId);
    if (bookedItem) {
      setPendingPickups((prev) => [...prev, { ...bookedItem, pickupTime }]);
    }
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    handleCloseBooking();
  };

  const handleCompletePickup = (itemId: string) => {
    const pending = pendingPickups.find((pickup) => pickup.id === itemId);
    if (pending) {
      setPendingPickups((prev) => prev.filter((pickup) => pickup.id !== itemId));
      setCompletedPickups((prev) => [...prev, pending]);
    }
  };

  return (
    <div className="container">
      {/* Column 1: Available Pickups */}
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
            {pendingPickups.map((pickup) => (
              <li key={pickup.id}>
                {pickup.name} - {pickup.pickupTime}{" "}
                <button onClick={() => handleCompletePickup(pickup.id)}>
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
            {completedPickups.map((pickup) => (
              <li key={pickup.id}>
                {pickup.name} - {pickup.pickupTime}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PickupScheduler;
