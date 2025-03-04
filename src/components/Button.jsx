import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white, target, rel }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => {
    // Use Link for internal routing
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes} target={target} rel={rel}>
          <span className={spanClasses}>{children}</span>
          {ButtonSvg(white)}
        </Link>
      );
    }

    // Use <a> for external links
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  };

  return href ? renderLink() : renderButton();
};

export default Button;
