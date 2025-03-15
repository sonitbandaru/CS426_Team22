import { useState } from "react";
import AvailabilityList from "../components/Scheduler/AvailabilityList";
import Booking from "../components/Scheduler/Booking";
import "../styles/Scheduler/PickupScheduler.css";

const PickupScheduler = () => {
    const sampleData = [
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
        { id: "1", name: "Steak", quantity: 5 },
        { id: "2", name: "Bread", quantity: 10 },
      ];
    
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    
    const handleBooking = (id: string) => {
        setSelectedItemId(id);
    };
    
    const handleCloseBooking = () => {
        setSelectedItemId(null);
    };
    
    const handleBookingConfirmation = (itemId: string, pickupTime: string) => {
        console.log(`Booking confirmed for item ${itemId} at ${pickupTime}`);
        // Booking logic will eventually go here
        handleCloseBooking();
    };


    return (
        <>
        <div className="container">
            <AvailabilityList items = {sampleData} onBook={handleBooking}/>
        {selectedItemId && (
            <Booking
                itemId={selectedItemId}
                onClose={handleCloseBooking}
                onConfirm={handleBookingConfirmation}
                availableSlots={["10:00 AM", "11:00 AM", "12:00 PM"]}
            />
        )}
        </div>
        </>
    )
}

export default PickupScheduler;

