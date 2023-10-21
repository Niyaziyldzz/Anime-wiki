import React from "react";

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose}>Kapat</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
