import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data";
import Image from "next/image";

const ProjectSection: React.FC = () => {
  return (
    <div id="projects" className="w-full bg-slate-100 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-8 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800">Our Projects</h1>
        <p className="text-lg text-gray-600 mt-2">
          Take a look at some of our featured works.
        </p>
        <div className="w-24 h-1 bg-orange-400 mx-auto mt-4"></div>

        <motion.div
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-72 group overflow-hidden border rounded-lg shadow-md bg-white cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-72 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectSection;
