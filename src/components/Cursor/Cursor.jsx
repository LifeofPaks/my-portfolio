import React, { useEffect } from "react";
import "./Cursor.scss";

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursorDot');
    const cursorOutline = document.querySelector('.cursorOutline');

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

    //   cursorOutline.style.left = `${posX}px`;
    //   cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration : 500, fill: 'forwards'})
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor">
      <div className="cursorDot"></div>
      <div className="cursorOutline"></div>
    </div>
  );
};

export default Cursor;
