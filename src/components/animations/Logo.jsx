import React from "react";
import DigiTechLogo from "../../assets/hero/DigiTechLogo.jpg"; // Corrected path
import "./Logo.css"; // Import the updated CSS file

const Logo = ({ src }) => {
  return (
    <div className="client-logo-container">
      <div className="client-logo-inner">
        <img src={src || DigiTechLogo} alt="Client Logo" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Logo;
