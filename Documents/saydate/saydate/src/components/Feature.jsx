
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Feature = () => {
  const slides = [
    {
      image: "https://www.ampersandintegrative.com/wp-content/uploads/2022/02/pexels-helena-lopes-697244-1080x675.jpg",
      title: "Meaningful Connections",
      description: "Find connections based on values, interests, and vibes.",
    },
    {
      image: "https://static.vecteezy.com/system/resources/thumbnails/028/974/755/small/friendship-day-best-friends-buddies-having-fun-generative-ai-photo.jpg",
      title: "Friendship First",
      description: "We prioritize genuine friendships before relationships.",
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:1400/1*Z6BypyfvMtiSDuGlDjrgbQ.jpeg",
      title: "Trust & Safety",
      description: "Safe, fun, and engaging interactions for everyone.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5VLr6ecfzd0VAR5DojjuUXyo_9CE9fo4XA&s",
      title: "Love & Care",
      description: "Build strong bonds with people who truly care.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1H_bX24GMr3thAE0mIneM-cIQL4YLKqdbCQ&s",
      title: "Casual Meets",
      description: "Meet for coffee, have fun, and make memories.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-amber-500 overflow-hidden">
      {/* Heading with Letter-by-Letter Pop Effect */}
      <motion.h1
        className="text-white text-4xl font-bold mb-20 flex"
        initial={{ opacity: 1 }}
        whileHover={{
          transition: { staggerChildren: 0.1 },
        }}
      >
        {"SayDate".split("").map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Slider Container */}
      <div className="relative flex items-center w-full h-[60vh] px-8">
        {/* Left Arrow */}
        <button
          className="absolute left-4 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
          onClick={goToPrevSlide}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Cards Wrapper */}
        <div className="flex w-full justify-center items-center space-x-6">
          {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => {
            const actualIndex = (index + slides.length) % slides.length;

            let scaleValue = 0.9;
            let opacityValue = 1;
            let zIndex = 1;
            let cursorType = "pointer";

            if (actualIndex === currentIndex) {
              scaleValue = 1.1;
              opacityValue = 1;
              zIndex = 10;
              cursorType = "default";
            }

            return (
              <motion.div
                key={actualIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: opacityValue,
                  scale: scaleValue,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-[30%] min-w-[280px] h-full rounded-xl shadow-xl overflow-hidden bg-white flex flex-col items-center cursor-pointer"
                style={{ zIndex, cursor: cursorType }}
                onClick={() => handleCardClick(actualIndex)}
              >
                <img
                  src={slides[actualIndex].image}
                  alt={slides[actualIndex].title}
                  className="w-full h-[80%] object-cover rounded-t-xl"
                />
                <div className="w-full bg-black bg-opacity-60 p-4 text-white rounded-b-xl">
                  <h2 className="text-lg font-semibold">
                    {slides[actualIndex].title}
                  </h2>
                  <p className="text-sm">{slides[actualIndex].description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
          onClick={goToNextSlide}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-300"
            }`}
            onClick={() => handleCardClick(index)}
          ></button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          onClick={goToPrevSlide}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Feature;