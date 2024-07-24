import React, { useState, useEffect } from "react";
import "./SlotMachineText.css"; // Make sure to create and import the CSS file

const SlotMachineText = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationState, setAnimationState] = useState("initial");

  useEffect(() => {
    // Trigger initial animation
    const initialTimer = setTimeout(() => {
      setAnimationState("reset");
      const resetTimer = setTimeout(() => {
        setAnimationState("paused");
      }, 500); // Duration of the reset animation

      return () => clearTimeout(resetTimer);
    }, 500); // Duration of the initial animation

    return () => clearTimeout(initialTimer);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationState("hovered");
    const resetTimer = setTimeout(() => {
      setAnimationState("reset");
    }, 500); // Duration of the hover animation

    return () => clearTimeout(resetTimer);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setAnimationState("reset");
    const resetTimer = setTimeout(() => {
      setAnimationState("paused");
    }, 500); // Duration of the reset animation

    return () => clearTimeout(resetTimer);
  };

  return (
    <span
      className="slot-machine-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className={`slot-machine ${animationState}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default SlotMachineText;
