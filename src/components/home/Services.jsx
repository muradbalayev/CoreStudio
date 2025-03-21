"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, stagger } from "motion";
import { motion, useInView } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const Services = () => {
  const containerRef = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.2 });
  const [activeService, setActiveService] = useState(1);
  
  const services = [
    {
      id: 1,
      icon: "code",
      title: "Dedicated development team",
      description: "Build your own development team to meet your scaling needs, and have it up and running in just 3-6 weeks.",
    },
    {
      id: 2,
      icon: "users",
      title: "Staff augmentation",
      description: "Enhance your existing team with skilled professionals who integrate seamlessly with your workflow and culture."
    },
    {
      id: 3,
      icon: "lightbulb",
      title: "IT consulting services",
      description: "Get expert advice on technology strategy, architecture, and implementation to optimize your digital initiatives."
    },
    {
      id: 4,
      icon: "search",
      title: "Tech recruitment",
      description: "Find the perfect tech talent for your permanent positions with our specialized recruitment services."
    }
  ];

  const toggleService = (id) => {
    setActiveService(id === activeService ? null : id);
  };

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Make container visible after fonts are loaded
      containerRef.current.style.visibility = "visible";

      // Get elements to animate
      const title = containerRef.current.querySelector('.services-title');
      const subtitle = containerRef.current.querySelector('.services-subtitle');
      const serviceItems = containerRef.current.querySelectorAll('.service-item');

      // Animate title
      animate(
        title,
        { opacity: [0, 1], y: [30, 0] },
        {
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: 0.2
        }
      );
      
      // Animate subtitle
      animate(
        subtitle,
        { opacity: [0, 1], y: [20, 0] },
        {
          type: "spring",
          duration: 1.2,
          bounce: 0,
          delay: 0.4
        }
      );
      
      // Animate service items with stagger
      animate(
        serviceItems,
        { opacity: [0, 1], y: [20, 0] },
        {
          type: "spring",
          duration: 1,
          bounce: 0,
          delay: stagger(0.1, { start: 0.6 })
        }
      );
    });
  }, []);

  // Icon components
  const IconCode = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  const IconUsers = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const IconLightbulb = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );

  const IconSearch = () => (
    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <IconCode />;
      case 'users':
        return <IconUsers />;
      case 'lightbulb':
        return <IconLightbulb />;
      case 'search':
        return <IconSearch />;
      default:
        return <IconCode />;
    }
  };

  return (
    <div className="py-20 overflow-hidden" ref={inViewRef}>
      <motion.div 
        ref={containerRef}
        className="services-container max-w-7xl mx-auto px-6 md:px-10 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="services-title text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Explore Our Comprehensive Services
        </h2>
        
        <p className="services-subtitle text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Trusted by companies in over 20 countries, CoreStudio is your reliable partner to scale your development capabilities quickly with top remote tech talent.
        </p>
        
        <div className="space-y-6">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className={`service-item border-t border-gray-800 py-8 px-4 transition-all duration-300 ${service.id === activeService ? 'bg-gray-900/30' : 'hover:bg-gray-900/10'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * service.id,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                backgroundColor: service.id === activeService ? "rgba(17, 24, 39, 0.3)" : "rgba(17, 24, 39, 0.1)" 
              }}
            >
              <div 
                className="flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="mr-6 text-white">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                
                <motion.button 
                  className="ml-auto flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-white hover:bg-white/10 transition-all duration-300"
                  animate={{ rotate: service.id === activeService ? 45 : 0 }}
                  transition={{ duration: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleService(service.id);
                  }}
                >
                  <ArrowDownRight size={27} className="text-white"/>
                </motion.button>
              </div>
              
              <motion.div 
                className="mt-6 pl-16 pr-4 text-gray-300 max-w-3xl overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: service.id === activeService ? 'auto' : 0,
                  opacity: service.id === activeService ? 1 : 0
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { duration: 0.3, delay: service.id === activeService ? 0.1 : 0 }
                }}
              >
                <p>{service.description}</p>
                {service.id === 1 && (
                  <motion.div 
                    className="mt-4 inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    Dedicated development team
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
