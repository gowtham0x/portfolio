"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  }
};

const Preloader = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Faster preloader: 1.5 seconds total
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 800); // Fast smooth exit
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#050505',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '100px', height: '100px' }}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              style={{ width: '100%', height: '100%' }}
            >
              {/* Ultra-minimal geometric logo animation */}
              <motion.path
                d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                }}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              <motion.circle
                cx="50" cy="50" r="10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
                fill="var(--accent-color)"
              />
            </motion.svg>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            style={{ marginTop: '2rem', textAlign: 'center' }}
          >
            <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.65rem', 
                letterSpacing: '0.5em', 
                color: 'var(--text-secondary)',
                textTransform: 'uppercase'
            }}>
              Loading
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
