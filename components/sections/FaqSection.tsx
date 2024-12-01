"use client"
import React, { useState } from 'react';
import{faq} from "@/data";
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center text-slate-100 mb-12">Frequently Asked Questions</h1>
        <div className="w-24 h-1 -mt-4 bg-orange-400 mx-auto "></div>
        <div className="space-y-6 max-w-3xl mx-auto mt-2">
          {faq.map((faq, index) => (
            <div key={index} className="border-b py-2 border-gray-300">
              <button
                className="w-full flex justify-between items-center py-3 text-lg font-medium text-slate-100 hover:text-primary-foreground focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <span className="text-xl text-slate-100 font-bold">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <p className="text-slate-100 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
