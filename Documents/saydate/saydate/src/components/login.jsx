
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <div className="absolute inset-0 flex flex-col justify-center items-end space-y-6 pr-8 transform -translate-y-32 pb-420">
            {/* Login Button */}
            <button
                className={`relative flex items-center w-20 h-20 bg-[#FF9671] rounded-full transition-all duration-300 ease-in-out 
                    ${hovered === "login" ? "w-64 h-12 rounded-2xl justify-start pl-6 pr-4" : "justify-center"}`}
                onMouseEnter={() => setHovered("login")}
                onMouseLeave={() => setHovered(null)}
            >
                {/* Icon - Moves to the Start */}
                <FontAwesomeIcon 
                    icon={faSignInAlt} 
                    className={`text-white text-2xl transition-all duration-300 
                        ${hovered === "login" ? "mr-2" : "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}`}
                />

                {/* Text - Appears on Hover */}
                <span className={`transition-opacity duration-300 ${hovered === "login" ? "opacity-100" : "opacity-0 absolute"}`}>
                    Login
                </span>
            </button>

            {/* Create Account Button */}
            <button
                className={`relative flex items-center w-20 h-20 bg-[#FFB6C1] rounded-full transition-all duration-300 ease-in-out 
                    ${hovered === "create" ? "w-64 h-12 rounded-2xl justify-start pl-6 pr-4" : "justify-center"}`}
                onMouseEnter={() => setHovered("create")}
                onMouseLeave={() => setHovered(null)}
            >
                {/* Icon - Moves to the Start */}
                <FontAwesomeIcon 
                    icon={faUserPlus} 
                    className={`text-white text-2xl transition-all duration-300 
                        ${hovered === "create" ? "mr-2" : "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"}`}
                />

                {/* Text - Appears on Hover */}
                <span className={`transition-opacity duration-300 ${hovered === "create" ? "opacity-100" : "opacity-0 absolute"}`}>
                    Create Account
                </span>
            </button>
        </div>
    );
};

export default Login;