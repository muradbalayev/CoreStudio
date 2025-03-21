import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";
import React, { useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import CustomCursor from "@/components/ui/CustomCursor";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Animation variants for main content
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1] // Custom ease curve for smooth animation
      }
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Custom Cursor */}
      {!isLoading && <CustomCursor />}
      
      {/* Loading Screen */}
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 z-0"></div> */}
      
      {/* Page Content */}
      {isLoading ? null : (
        <motion.div 
          className="mx-auto"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <Hero />
          <Projects />
          <Services />
          <Contact />
        </motion.div>
      )}
    </>
  );
};

export default Home;
