import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [textHovered, setTextHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Simple throttle function to prevent too many updates
    const throttle = (callback, delay) => {
      let lastCall = 0;
      return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return callback(...args);
      };
    };

    // Throttled mouse move handler
    const onMouseMove = throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 10); // 10ms throttle

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const onMouseEnter = () => {
      setIsHidden(false);
    };

    // Element hover detection
    const onElementHover = (e) => {
      const target = e.target;
      
      // Check if hovering over text
      const isText = 
        target.tagName === 'P' || 
        target.tagName === 'H1' || 
        target.tagName === 'H2' || 
        target.tagName === 'H3' || 
        target.tagName === 'H4' || 
        target.tagName === 'H5' || 
        target.tagName === 'H6' || 
        target.tagName === 'SPAN' || 
        target.tagName === 'LI' || 
        target.tagName === 'LABEL';
      
      // Check if hovering over interactive element
      const isLink = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.classList.contains('service-item') || 
        target.getAttribute('role') === 'button' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA';
      
      setTextHovered(isText);
      setLinkHovered(isLink);
    };

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onElementHover);

    // Set body cursor to none
    document.body.style.cursor = "none";
    
    // Cleanup
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onElementHover);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
      {/* Main cursor */}
      <div
        style={{
          position: "fixed",
          width: textHovered ? "35px" : linkHovered ? "25px" : "15px",
          height: textHovered ? "35px" : linkHovered ? "25px" : "15px",
          borderRadius: "50%",
          backgroundColor: "white",
          mixBlendMode: textHovered ? "exclusion" : "normal",
          transform: "translate(-50%, -50%)",
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: textHovered ? 0.5 : (isHidden ? 0 : 1),
          transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s, mix-blend-mode 0.3s",
          pointerEvents: "none",
          boxShadow: clicked ? "0 0 20px rgba(255, 255, 255, 0.7)" : "0 0 10px rgba(255, 255, 255, 0.3)",
          filter: clicked ? "blur(0px)" : "blur(0.5px)",
          zIndex: textHovered ? 1 : 9999
        }}
      />

      {/* Decorative elements - small dots that appear when clicking */}
      {clicked && (
        <>
          <div
            style={{
              position: "fixed",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: textHovered ? "white" : "none",
              mixBlendMode: textHovered ? "exclusion" : "normal",
              transform: "translate(-50%, -50%)",
              left: `${position.x + 15}px`,
              top: `${position.y - 15}px`,
              opacity: textHovered ? 0.3 : 0.7,
              pointerEvents: "none",
              zIndex: textHovered ? 1 : 9999
            }}
          />
          <div
            style={{
              position: "fixed",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: textHovered ? "white" : "none",
              mixBlendMode: textHovered ? "exclusion" : "normal",
              transform: "translate(-50%, -50%)",
              left: `${position.x - 18}px`,
              top: `${position.y + 12}px`,
              opacity: textHovered ? 0.2 : 0.5,
              pointerEvents: "none",
              zIndex: textHovered ? 1 : 9999
            }}
          />
          <div
            style={{
              position: "fixed",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              backgroundColor: textHovered ? "white" : "none",
              mixBlendMode: textHovered ? "exclusion" : "normal",
              transform: "translate(-50%, -50%)",
              left: `${position.x + 10}px`,
              top: `${position.y + 16}px`,
              opacity: textHovered ? 0.1 : 0.4,
              pointerEvents: "none",
              zIndex: textHovered ? 1 : 9999
            }}
          />
        </>
      )}
    </div>
  );
};

export default CustomCursor;
