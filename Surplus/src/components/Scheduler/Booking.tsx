import React, { useState } from "react";
import "../../styles//Scheduler/Booking.css";

interface BookingProps {
  availableSlots: string[];
  itemId: string | null;
  onConfirm: (itemId: string, pickupTime: string) => void;
  onClose: () => void; // if you want a close (X) button
}

const Booking: React.FC<BookingProps> = ({ availableSlots, itemId, onConfirm, onClose }) => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleConfirm = () => {
    if (itemId && selectedTime) {
      onConfirm(itemId, selectedTime);
    }
  };

  return (
    <div className="booking-modal">
      <div className="booking-modal-content">
        <span className="booking-modal-close" onClick={onClose}>
          &times;
        </span>

        <h3>Select a Pickup Time</h3>
        <ul>
          {availableSlots.map((slot, index) => (
            <li key={index}>
              <button
                className={selectedTime === slot ? "selected" : ""}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={handleConfirm}
          disabled={!selectedTime}
          className="confirm-button"
        >
          Confirm Your Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
