// src/components/ui/SectionWrapper.tsx
import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string; // Allows additional styles if needed
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "" }) => {
  return (
    <section className={`py-12 px-4 sm:px-8 lg:px-16 ${className}`}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
