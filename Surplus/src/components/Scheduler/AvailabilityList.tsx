import React from "react";
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
        <div>
            <h2>Available Pickups</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} available
                        <button onClick={() => onBook(item.id)}>Book Pickup</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default AvailabilityList;