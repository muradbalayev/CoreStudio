import React, { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 5);
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Delay a bit after reaching 100% before removing loading screen
          setTimeout(() => {
            setLoading(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 700);
          
          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const titleText = "CORESTUDIO";

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { 
              duration: 1.2, 
              ease: [0.6, 0.01, 0.05, 0.95]
            }
          }}
        >
          <motion.div
            className="w-full max-w-3xl px-8 z-20"
          >
            
            <div className="relative mb-12 overflow-hidden z-20">
              <h1 
                ref={textRef}
                className="text-5xl md:text-7xl font-bold text-center mb-0 relative z-10"
                style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
              >
                {titleText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: 0.1 + (index * 0.05)
                      }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              
              {/* Black and white fill animation overlay */}
              <motion.div 
                className="absolute inset-0 z-0"
                style={{ 
                  clipPath: 'inset(0 100% 0 0)',
                  width: '100%',
                  height: '100%'
                }}
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ 
                  clipPath: `inset(0 ${100 - progress}% 0 0)` 
                }}
                transition={{ ease: "easeInOut" }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-center mb-0 text-white">
                  {titleText}
                </h1>
              </motion.div>
            </div>
            
            <div className="relative w-full h-[2px] bg-gray-800 overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            
            <div className="flex justify-between mt-2">
              <motion.p 
                className="text-white text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                LOADING
              </motion.p>
              
              <motion.p 
                className="text-white text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {progress}%
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        
      )}
      
    </AnimatePresence>
  );
};

export default LoadingScreen;
