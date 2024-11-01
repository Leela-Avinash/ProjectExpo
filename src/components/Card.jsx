import React, { useState } from "react";
import College from "../assets/JNTU-GV_clg.jpg";

const Card = ({ Image, Title, Description }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        <div
            className="relative w-80 h-96 perspective"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
                setIsHovered(true);
                setIsFlipped(true);
            }}
            onMouseLeave={() => {
                setIsFlipped(false);
                setIsHovered(false);
            }}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 transform`}
                onMouseEnter={() => {
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
                style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
            >
                {!isFlipped ? (
                    <div
                        className="absolute w-full h-full text-black rounded-lg backface-hidden overflow-hidden flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `url(${Image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                ) : (
                    <div className="bg-[rgba(30,30,30,0.5)] backdrop-blur-md border-gray-800 absolute w-full h-full text-gray-800 rounded-lg backface-hidden transform rotate-y-180 overflow-hidden flex flex-col justify-center items-center hover:shadow-[0_0_15px_rgba(106,90,205,0.3)] text-muted-foreground scale-x-[-1]">
                        <div
                            className={`absolute inset-0 transition-opacity duration-300`}
                            style={{
                                opacity: isHovered ? 1 : 0,
                                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                                pointerEvents: isHovered ? "auto" : "none",
                            }}
                        />
                        <h1 className="font-bold text-xl text-center">{Title}</h1>
                        <p className="text-sm px-8 text-center mt-2">
                            {Description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
