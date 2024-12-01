"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaProjectDiagram, FaSmile, FaTrophy } from "react-icons/fa";

// Count-Up Component
const CountUp = ({ end, isVisible }: { end: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; 
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [end, isVisible]);

  return <span>{count}</span>;
};

const AchievementSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const currentRef = sectionRef.current; // Capture the current ref value
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
  
    if (currentRef) observer.observe(currentRef);
  
    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use the captured ref value
    };
  }, []);
  

  return (
    <div
      ref={sectionRef}
      className="py-10 px-7 rounded-lg bg-secondary text-slate-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-6 px-8 md:px-16">
        <div className="space-y-4 py-6 shadow-slate-100 border shadow-lg">
          <FaProjectDiagram className="text-4xl mx-auto text-orange-400" />
          <h3 className="text-4xl font-bold">
            <CountUp end={200} isVisible={isVisible} />+
          </h3>
          <p className="text-lg text-orange-400">Projects Completed</p>
        </div>
        <div className="space-y-4 py-6 shadow-slate-100 border shadow-lg">
          <FaSmile className="text-4xl mx-auto text-orange-400" />
          <h3 className="text-4xl font-bold">
            <CountUp end={150} isVisible={isVisible} />+
          </h3>
          <p className="text-lg text-orange-400">Happy Clients</p>
        </div>
        <div className="space-y-4 py-6 shadow-slate-100 border shadow-lg">
          <FaTrophy className="text-4xl mx-auto text-orange-400" />
          <h3 className="text-4xl font-bold">
            <CountUp end={10} isVisible={isVisible} />+
          </h3>
          <p className="text-lg text-orange-400">Awards Won</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
