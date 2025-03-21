"use client";

import React, { useEffect, useRef } from "react";
import { Spotlight } from "../ui/spotlight-new";
import { animate, stagger } from "motion";

const Hero = () => {
  const containerRef = useRef(null);
  
  // Text for animations
  const titleText = "CORESTUDIO";
  const tagline = "CREATIVE DIGITAL SOLUTIONS";
  const description = "We transform your vision into stunning digital experiences with cutting-edge design and development.";

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Make container visible after fonts are loaded
      containerRef.current.style.visibility = "visible";

      // Get all elements with the split-word class
      const titleWords = containerRef.current.querySelectorAll('.title-word');
      const taglineWords = containerRef.current.querySelectorAll('.tagline-word');
      const descWords = containerRef.current.querySelectorAll('.desc-word');

      // Animate title words
      animate(
        titleWords,
        { opacity: [0, 1], y: [30, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.08),
        }
      );
      
      // Animate tagline words
      animate(
        taglineWords,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: stagger(0.05, { start: 1 }),
        }
      );
      
      // Animate description words
      animate(
        descWords,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: stagger(0.02, { start: 1.5 }),
        }
      );
      
      // Animate button
      const button = containerRef.current.querySelector('.cta-button');
      if (button) {
        animate(
          button,
          { opacity: [0, 1] },
          {
            duration: 0.5,
            delay: 1.5,
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <Spotlight />
      
      <div 
        ref={containerRef}
        className="hero-container p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center"
      >
        {/* Main title */}
        <h1 className="text-5xl md:text-8xl font-bold text-center  overflow-hidden mb-4">
          {titleText.split(" ").map((word, i) => (
            <span key={i} className="title-word text-white split-word">
              {word}&nbsp;
            </span>
          ))}
        </h1>
        
        {/* Tagline */}
        <div className="text-sm md:text-xl tracking-[0.3em] font-light text-neutral-300 mb-6">
          {tagline.split(" ").map((word, i) => (
            <span key={i} className="tagline-word split-word">
              {word}&nbsp;
            </span>
          ))}
        </div>
        
        {/* Description */}
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg text-center mx-auto mb-8">
          {description.split(" ").map((word, i) => (
            <span key={i} className="desc-word split-word">
              {word}&nbsp;
            </span>
          ))}
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="cta-button px-8 py-3 tracking-wider rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-300 opacity-0">
            Contact Us
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .split-word {
          will-change: transform, opacity;
          opacity: 0;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Hero;
