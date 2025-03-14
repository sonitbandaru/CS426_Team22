import React from "react";
import AvailabilityList from "../components/Scheduler/AvailabilityList";
const availableItems = [
    { id: "1", name: "Steak", quantity: 5 },
    { id: "2", name: "Bread", quantity: 10 },
  ];
const handleBooking = (id: string) => {
    console.log(`Booking confirmed for item ID: ${id}`);
};

const PickupScheduler = () => {
    return (
        <>
        <div className="container">
            <AvailabilityList items = {availableItems} onBook={handleBooking}/>
        </div>
        </>
    )
}

export default PickupScheduler;

