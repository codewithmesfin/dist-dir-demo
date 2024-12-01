"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Link from "next/link";

const images = ["/back3.jpg", "/back1.jpg", "/back2.jpg"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(() => (index + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 6000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <SectionWrapper className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative h-full px-4 py-16 sm:px-8 text-center sm:text-left flex flex-col justify-center z-10">
        <div className="space-y-7 mt-7  relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-relaxed text-gray-100 drop-shadow-md">
            WHERE YOU FIND <br /> THE BEST BUILDERS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Safe, Reliable, and Cost-Effective Construction Company. <br />
            We offer the best construction services.
          </p>
          <Link href="/services">
            <button className="px-10  py-3 text-lg font-semibold text-white bg-orange-400 rounded-md shadow-md  hover:bg-orange-500 transition-all duration-300">
              Learn more
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-4 flex items-center z-30">
        <button
          className="p-3 bg-gray-700 bg-opacity-60 hover:bg-orange-500 rounded-full transition-all duration-300"
          onClick={() => goToSlide(currentIndex - 1)}
        >
          <ChevronLeft className="text-white" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-30">
        <button
          className="p-3 bg-gray-700 bg-opacity-60 hover:bg-orange-500 rounded-full transition-all duration-300"
          onClick={() => goToSlide(currentIndex + 1)}
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
