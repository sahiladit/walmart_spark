
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "./Mycard";
import Nav from "./nav";

const About = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Page 1 */}
            <div className="w-screen h-auto bg-yellow-300">
                <Nav />
                <h1 className="pt-6 text-4xl md:text-5xl font-extrabold text-purple-900 mb-4 text-center">SayDate</h1>
                <h5 className="text-center text-lg md:text-xl">We are here for...</h5> <br />

                {/* Trademark Line with Torch Effect */}
                <motion.h1
                    className="relative text-3xl md:text-6xl font-extrabold text-white text-center px-4"
                    whileHover={{
                        textShadow: [
                            "0px 0px 20px rgba(255, 255, 255, 0.2)",
                            "0px 0px 40px rgba(255, 255, 255, 0.6)",
                            "0px 0px 60px rgba(255, 255, 255, 1)"
                        ]
                    }}
                >
                    <motion.span
                        className="text-purple-600 relative"
                        whileHover={{
                            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
                            backgroundSize: "200% 100%",
                            backgroundPosition: ["-100%", "200%"],
                            transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
                        }}
                    >
                        Heartfelt Connections
                    </motion.span>
                    , Not Just Quick Swipes...
                </motion.h1>

                {/* Pink Animated Box */}
                <div className="flex justify-center items-center w-full h-auto mt-6 px-4">
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={isHovered ? {} : { scale: [1, 0.95, 1] }} // Stops animation on hover
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: isHovered ? 0 : Infinity,
                        }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 30px rgba(255, 105, 180, 0.6)", // Glow effect
                        }}
                        className="z-5 rounded-3xl flex justify-center items-center px-6 py-6 md:px-12 md:py-8 shadow-lg w-full max-w-md md:max-w-xl"
                        style={{ backgroundColor: "#FB7185" }} // Vibrant pink color
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <h4 className="text-lg md:text-2xl font-medium text-center text-white">
                            Before love, there’s trust. <br />
                            Before trust, there’s friendship.
                        </h4>
                    </motion.div>
                </div>

                {/* Responsive Image */}
                <div className="flex justify-center items-center w-full h-auto mt-4 px-4">
                    <img
                        src="https://media.istockphoto.com/id/1134157962/photo/happy-couple-walks-by-sea-kayak-or-canoe.jpg?s=612x612&w=0&k=20&c=Hvpqc_USmj_e2whZD-8PjBhCL_BxnliblXNzVVf-_As="
                        alt="Couple photo"
                        className="w-full max-w-lg md:max-w-2xl rounded-3xl mb-4"
                    />
                </div>
            </div>

            {/* Page 2 */}
            <div className="w-screen h-auto md:h-screen bg-gray-900 flex flex-col justify-center items-center text-white px-4 py-10 md:py-0">
                <div className="flex flex-col md:flex-row md:justify-around w-full max-w-6xl h-auto md:h-150 px-4 md:px-6 space-y-6 md:space-y-0 items-center">
                    <Card
                        title="What is SayDate"
                        discription="The fun and safe way to connect with like-minded people. Set a date when both of you are ready."
                        bgColor="#FF4F5A"
                    />
                    <Card
                        title="Why choose SayDate?"
                        discription="SayDate ensures a stress-free dating experience by matching you only when both are interested and ready."
                        bgColor="#A35FF7"
                        isTall
                    />
                    <Card
                        title="About"
                        discription="SayDate is designed to make meaningful connections effortless. Our platform is fun, safe, and intuitive."
                        bgColor="#FFA500"
                    />
                </div>

                {/* Back Button to Home */}
                <div className="mt-6 flex justify-center w-full">
                    <button
                        className="px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;