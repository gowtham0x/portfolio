"use client";
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Ultra-smooth spring physics matching high-end references
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Disable completely on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      <style dangerouslySetContent={{__html: `
        @media (min-width: 769px) {
          body, a, button {
            cursor: none !important;
          }
        }
      `}} />
      
      {/* Single, highly fluid cursor with difference blend mode */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '16px',
          height: '16px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
          x: cursorX,
          y: cursorY,
          mixBlendMode: 'difference',
        }}
        animate={{
          scale: isHovering ? 4.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
};

export default CustomCursor;
