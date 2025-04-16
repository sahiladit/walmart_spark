
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const SecondPage = () => {
  const navigate = useNavigate();
  
  // Ref for the text section
  const textRef = useRef(null);
  const isInView = useInView(textRef, { triggerOnce: false, threshold: 0.3 });

  return (
    <div className="z-5 rounded-t-[5rem] flex flex-col md:flex-row items-center justify-center h-auto md:h-screen bg-gray-900 px-6 md:px-10 w-screen py-10">
      <div className="flex flex-col md:flex-row items-center gap-x-6 max-w-5xl w-full xl:w-auto xl:h-auto">
        {/* Image Section */}
        <img
          src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXRpZnVsJTIwY291cGxlfGVufDB8fDB8fHww"
          alt="Beautiful Couple"
          className="w-full md:w-96 h-auto object-cover rounded-lg xl:w-130 xl:h-130"
        />

        {/* Text Section with Stronger Slide-In Effect */}
        <motion.div
          ref={textRef}
          initial={{ x: 300, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left mt-6 md:mt-0"
        >
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            Plan a Date <br /> when you both feel {" "}
            <span className="text-red-400">READY</span>
          </h1>

          {/* About SayDate Button */}
          <button
            className="z-5 mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
            onClick={() => {
              navigate("/about");
              window.scrollTo(0, 0);
            }}
          >
            About SayDate
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondPage;