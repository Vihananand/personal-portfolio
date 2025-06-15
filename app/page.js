"use client";

import ScrollVelocity from "@/components/TextAnimations/ScrollVelocity/ScrollVelocity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainContent from "@/components/mainContent";

export default function Home() {
  
  return (
    <>
      <div className="w-full min-h-screen bg-[url('/images/bg-image.jpg')] bg-center bg-cover bg-no-repeat flex flex-col justify-between">
        {/* Navbar */}
        <Navbar/>

        {/* Scroll Text */}
        <div className="pb-20 sm:pb-0 md:pb-0">
          <ScrollVelocity
            texts={["Vihan Anand", "Full Stack Web Developer"]}
            velocity={-100}
            className="text-white font-thin text-8xl md:text-9xl lg:text-[8rem] font-['Aalto'] tracking-wider"
          />
        </div>
      </div>
      <MainContent/>
      <Footer/>
    </>
  );
}
