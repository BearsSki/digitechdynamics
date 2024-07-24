import React, { useEffect, useState } from "react";
import "./RingPulse.css"; // Ensure this CSS file for animations is included

const RingsPulse = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <div className="pulse-ring ring1"></div>
      <div className="pulse-ring ring2"></div>
      <div className="pulse-ring ring3"></div>
      <div className="pulse-ring ring4"></div>
    </div>
  );
};

export default RingsPulse;
