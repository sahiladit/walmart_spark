
import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ title, discription, bgColor, isTall }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className={`relative w-90 ${isTall ? "h-96" : "h-80"} rounded-xl flex items-center justify-center cursor-pointer`}
            style={{ perspective: "1000px" }} // Ensures 3D effect
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Front Side (Initial: Click to Flip) */}
            <motion.div
                className="absolute w-full h-full rounded-xl shadow-lg flex flex-col items-center justify-center text-white text-center"
                style={{ backgroundColor: bgColor, backfaceVisibility: "hidden" }}
                initial={false}
                animate={{ rotateY: isFlipped ? -180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <h1 className="text-2xl font-bold">Click to Flip the Card!</h1>
            </motion.div>

            {/* Back Side (Main Content) */}
            <motion.div
                className="absolute w-full h-full rounded-xl shadow-lg flex flex-col items-center justify-center text-white text-center"
                style={{
                    backgroundColor: bgColor,
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                }}
                initial={false}
                animate={{ rotateY: isFlipped ? 0 : 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="text-xl font-normal pt-6">{discription}</h3>
            </motion.div>
        </motion.div>
    );
};

export default Card;