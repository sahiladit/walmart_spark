
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ThirdPage = () => {
  const navigate = useNavigate();

  function toFeatures() {
    navigate("/feature");
  }

  const textLines = [
    [
      { text: "No ", color: "text-white" },
      { text: "random matches.", color: "text-purple-500" },
    ],
    [
      { text: "No ", color: "text-white" },
      { text: "pressure.", color: "text-fuchsia-400" },
    ],
    [
      { text: "Just ", color: "text-white" },
      { text: "real", color: "text-amber-500" },
      { text: " connections.", color: "text-white" },
    ],
  ];

  return (
    <div className="z-5 w-screen min-h-screen bg-gray-900 rounded-4xl flex flex-col md:flex-row-reverse md:h-screen">
      {/* Image Section - Fullscreen on Mobile */}
      <div className="relative w-full h-screen md:w-1/2 md:h-full">
        <img
          src="https://w0.peakpx.com/wallpaper/521/644/HD-wallpaper-couples-love-cute-couples-couples-in-love-couple-goals-couples.jpg"
          alt="Couple Playing Golf"
          className="w-full h-full object-cover md:rounded-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="px-5 py-10 md:px-20 md:py-20 md:w-1/2 flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold">
          Swipe <span className="text-pink-600">less</span>, <br />
          connect <span className="text-amber-400">better</span> <br />
        </h1>

        {/* Text with Hover Effects */}
        <motion.h3
          className="text-xl md:text-3xl mt-5 md:mt-10 flex flex-col space-y-3"
          initial={{ opacity: 1 }}
          whileHover={{ transition: { staggerChildren: 0.05 } }}
        >
          {textLines.map((line, lineIndex) => (
            <div key={lineIndex} className="flex">
              {line.map((word, wordIndex) => (
                <div key={wordIndex} className={`mr-2 ${word.color} flex`}>
                  {word.text.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className={`inline-block ${letter === " " ? "w-2" : ""}`}
                      initial={{ y: 0 }}
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </motion.h3>

        {/* Button Section */}
        <button
          className="bg-pink-700 w-full md:w-1/3 h-12 rounded-2xl mt-10 px-5 py-3 text-lg md:text-xl text-white hover:bg-pink-800 transition-all"
          onClick={toFeatures}
        >
          Features
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;