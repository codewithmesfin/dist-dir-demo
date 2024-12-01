"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
const AboutSection = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const currentRef = aboutRef.current; 
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } 
    );
  
    if (currentRef) observer.observe(currentRef);
  
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  

  return (
    <section ref={aboutRef} className="relative bg-primary py-16 w-full">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8  md:px-16 items-center">
        
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1.05 } : { scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            className="rounded-lg shadow-lg w-full h-auto"
            src="/background.jpg"
            alt="Construction Image"
            width={500}
            height={600}
          />
        </motion.div>

        
        <motion.div
          className="space-y-8 text-center  md:text-left"
          initial={{ scale: 0.9 }}
          animate={isVisible ? { scale: 1.05 } : { scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-slate-100 text-4xl md:text-5xl font-semibold leading-relaxed">
            About Furtuu
          </h1>
          <p className="text-gray-100 text-lg font-medium leading-relaxed">
            We are dedicated to delivering top-quality construction services
            with unmatched reliability and innovation. Our experienced team
            ensures every project meets the highest standards.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <IoMdCheckmark className="text-orange-400 text-3xl" />
              <div>
                <h2 className="text-gray-100 text-xl font-semibold">
                  Reliable Services
                </h2>
                <p className="text-orange-400 text-sm">
                  Over 200 companies trust our expertise.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoMdCheckmark className="text-orange-400 text-3xl" />
              <div>
                <h2 className="text-gray-100 text-xl font-semibold">
                  Cost-Effective
                </h2>
                <p className="text-orange-400 text-sm">
                  We provide the best value for your investment.
                </p>
              </div>
            </div>
          </div>
          <Link href="/about">
            <button className="px-8 mt-6 py-2 text-lg font-semibold text-white bg-orange-400 rounded-md shadow-md shadow-slate-100 border-slate-100 hover:bg-primary  transition-all duration-300">
              Learn more
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
