import React from "react";
import BgCode from "@/assets/11.webp";

const AboutSection = () => {
  return (
    <div className="diff aspect-[16/9]">
      <div className="diff-item-1">
        <img alt="daisy" src={BgCode.src} />
      </div>
      <div className="diff-item-2">
        <img alt="daisy" src={BgCode.src} />
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};
export default AboutSection;
