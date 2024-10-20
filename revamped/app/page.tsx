import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import NavBar from "@/ui/NavBar";
import HeroText from "@/ui/HeroText";
import SkillsSection from "@/ui/SkillsSection";
import AboutSection from "@/ui/AboutSection";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full">
        <section className="text-white">
          <NavBar />
        </section>
        <section id="#hero" className="text-white">
          <HeroText />
        </section>
        <section className="flex justify-center text-white">
          <SkillsSection />
        </section>
        <div className="relative w-full my-0 h-52 bg-gradient-to-b from-black via-[#4169E1] to-black clip-path-wavy-top clip-path-wavy-bottom">
          uieriureiurehu
        </div>
        <section className="text-white">
          <AboutSection />
        </section>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
