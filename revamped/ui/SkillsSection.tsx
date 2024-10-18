import React from "react";
import Image from "next/image";
import PythonI from "@/assets/PythonIcon.png";
import NxtI from "@/assets/NextIcon.png";
import HTMLI from "@/assets/HTMLIcon.png";
import ReactI from "@/assets/ReactIcon.png";
import JscriptI from "@/assets/JavascriptIcon.png";
import TailI from "@/assets/TailWindIcon.png";
import BootI from "@/assets/BootstrapIcon.png";
import CSSI from "@/assets/CSSIcon.png";
import FigmaI from "@/assets/FigmaIcon.png";
import GoogleI from "@/assets/GoogleIcon.png";
import MongoI from "@/assets/MongoIcon.png";
import AWSI from "@/assets/AWSIcon.png";
import SupabaseI from "@/assets/SupaBaseIcon.png";
import NodeI from "@/assets/NodeIcon.png";

const SkillsSection = () => {
  const skills = [
    { src: PythonI, alt: "Python" },
    { src: NxtI, alt: "Next.js" },
    { src: ReactI, alt: "React" },
    { src: JscriptI, alt: "JavaScript" },
    { src: HTMLI, alt: "HTML" },
    { src: TailI, alt: "Tailwind" },
    { src: BootI, alt: "Bootstrap" },
    { src: CSSI, alt: "CSS" },
    { src: FigmaI, alt: "Figma" },
    { src: GoogleI, alt: "Google" },
    { src: MongoI, alt: "MongoDB" },
    { src: AWSI, alt: "AWS" },
    { src: SupabaseI, alt: "Supabase" },
    { src: NodeI, alt: "Node.js" },
  ];

  return (
    <div className="w-full px-4 py-8 md:py-12">
      {/* Skills Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8 p-4 rounded-xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 relative">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(135,206,235,0.5)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Heading with gradient and emoji */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-8 text-center">
        <span className="bg-gradient-to-r from-sky-400 to-[#ff0066] bg-clip-text text-transparent animate-pulse">
          Yeah, I&apos;m multilingual and handy
        </span>
        <span className="ml-2">😎</span>
      </h2>
    </div>
  );
};

export default SkillsSection;
