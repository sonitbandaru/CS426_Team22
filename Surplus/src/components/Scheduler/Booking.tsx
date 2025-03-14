import React from "react";
import { useState } from "react";

interface BookingProps {
    isOpen: boolean;
    itemId: string | null;
    onClose: () => void; // For Modal opening and closing
    onConfirm: (itemId: string, pickupTime: string) => void; 
}

const Booking: React.FC<BookingProps> = ({isOpen, itemId, onClose, onConfirm}) => {
    const [pickupTime, setPickupTime] = useState("");

    const handleConfirm = () => {
      if (itemId && pickupTime) {
        onConfirm(itemId, pickupTime);
        setPickupTime("");
      }
    };

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <h3>Select a Pickup Time</h3>
                <input
                    type = "datetime-local"
                    value = {pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="datetime-input"
                />
                <button onClick={handleConfirm} className="confirm-button">
                    Confirm Your Booking
                </button>
            </div>
        </div>
    )
} 

export default Booking;