"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, stagger } from "motion";

const Contact = () => {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Make container visible after fonts are loaded
      containerRef.current.style.visibility = "visible";

      // Get all elements with animation classes
      const title = containerRef.current.querySelector('.contact-title');
      const inputs = containerRef.current.querySelectorAll('.form-input-container');
      const button = containerRef.current.querySelector('.submit-button');

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
      
      // Animate form inputs with stagger
      animate(
        inputs,
        { opacity: [0, 1], x: [-20, 0] },
        {
          type: "spring",
          duration: 1,
          bounce: 0,
          delay: stagger(0.1, { start: 0.5 })
        }
      );
      
      // Animate button
      animate(
        button,
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.5,
          delay: 1
        }
      );
    });
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          fullName: "",
          email: "",
          phone: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div 
        ref={containerRef}
        className="contact-container max-w-4xl mx-auto px-4 relative z-10"
      >
        <h2 className="contact-title text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-input-container">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
              placeholder="Your name"
            />
          </div>
          
          <div className="form-input-container">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-input-container">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
              placeholder="Your phone number (optional)"
            />
          </div>
          
          <div className="form-input-container">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`submit-button relative px-8 py-3 tracking-wider rounded-full border border-white/20 text-white font-medium transition-all duration-300 overflow-hidden ${isSubmitting ? 'cursor-wait' : ''} ${isSubmitted ? 'bg-green-500 border-green-500' : 'hover:bg-white/10'}`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center">
                  <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Message Sent!
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
