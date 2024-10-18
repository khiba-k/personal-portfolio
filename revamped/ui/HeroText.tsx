import React from "react";

const HeroText = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] px-4">
      <p className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
        from concept to{" "}
        <span className="inline-block animate-[pulse_3s_ease-in-out_infinite] bg-gradient-to-r from-[#ff0066] via-sky-400 to-[#ff0066] bg-clip-text text-transparent bg-300% animate-gradient">
          creation
        </span>
      </p>
    </div>
  );
};

export default HeroText;
