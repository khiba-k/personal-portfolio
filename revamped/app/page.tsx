import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import NavBar from "@/ui/NavBar";
import HeroText from "@/ui/HeroText";
import SkillsSection from "@/ui/SkillsSection";

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
        <section className="text-white">
          <SkillsSection />
        </section>
        <section className="text-white">Header</section>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
