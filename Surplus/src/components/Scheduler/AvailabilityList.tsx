import React from "react";
import "../../styles/Scheduler/AvailabilityList.css"
interface Item {
    id: string;
    name: string;
    quantity: number; 
}

interface AvailabilityListProps {
    items: Item[];
    onBook: (id: string) => void; // Will be utilized to log bookings. 
}
const AvailabilityList: React.FC<AvailabilityListProps> = ({items, onBook}) => {
    return (
        <>
        <div className="availability-list-container">
            <h2 className="availability-header">Available Pickups</h2>
            <ul className="pickup-list-container">
                {items.map((item) => (
                    <li className="pickup-list" key={item.id}>
                        {item.name} - {item.quantity} available
                        <button className="pickup-button"onClick={() => onBook(item.id)}>Book Pickup</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default AvailabilityList;