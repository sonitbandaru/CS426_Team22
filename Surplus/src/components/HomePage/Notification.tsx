import React, { useState } from "react";
import notiIcon from "../../assets/noti.png";
import "../../styles/HomePage/notification.css"; 

const Notification = () =>{
  const [isOpen, setIsOpen] = useState(false);

  return(
    <>
      <div className="notification-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src={notiIcon} alt="notifications" />
      </div>

      {isOpen && (
        <div className="notification-popup">
          <p>Testing noti</p>
          <p>New pick up scheduled!</p>
        </div>
      )}
    </>
  );
};

export default Notification;
