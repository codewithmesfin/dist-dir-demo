import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import Image from "next/image";
const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const zoomInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeInOut" } },
};

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideUpVariant}
      className="bg-primary py-16 w-full"
    >
      <div className="container text-center mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-slate-100">Our Services</h1>
      <p className="text-lg text-slate-100 mt-2">
          Take a look at some of our featured works.
        </p>
        <div className="w-24 h-1 bg-orange-400 mx-auto mt-4"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariant}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group flex flex-col h-full bg-primary rounded-lg overflow-hidden shadow-lg shadow-slate-100 border border-slate-100 transition-transform duration-300 hover:scale-95"
            >
              {/* Image Section */}
              <motion.div
  className="h-52 w-full overflow-hidden"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }}
>
  <Image
    src={service.image}
    alt={service.title}
    width={400}
    height={400}
    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
  />
</motion.div>

              {/* Icon and Text */}
              <div className="flex-1 text-center px-4 py-4">
                <span className="text-3xl text-slate-100">{service.icon}</span>
                <h3 className="text-xl font-bold text-slate-100 mt-4">{service.title}</h3>
                <p className="text-base font-medium text-orange-400 mt-2">{service.description}</p>
              </div>

              {/* Button */}
              <div className="px-4 pb-4">
              <div className="px-4 pb-4 flex justify-center">
                <Link href="/services"><button className="px-6 py-2 rounded-md border text-center hover:text-slate-100  shadow-md shadow-slate-100 text-slate-100 font-medium hover:bg-transparent bg-orange-400 transition-all ">
    Get Service
  </button></Link>
  
</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
