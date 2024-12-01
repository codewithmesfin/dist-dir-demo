import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { projects } from '@/data/projects';
import ContactSection from '@/components/sections/ContactSection';

const page = () => {
  return (
    <>
    <Header/>
    <div className='relative w-full h-96 overflow-hidden'>
 <Image src="/banner4.jpg"
 alt='banner image'
 className='w-full h-full rounded-sm mb-7 object-cover'
 width={400}
 height={400}
 />
<div className='flex flex-col justify-center items-center absolute inset-0 z-20'>
  <div className='opacity-1 transform-none'>
    <h2 className="text-3xl md:text-3xl font-bold text-slate-100">Our Projects</h2>
    </div>
    <div className='opacity-1 transform-none'><p className="md:text-xl text-lg font-semibold text-gray-300 mt-2 capitalize text-center">We provide efficient, fast and usefull Construction</p></div>

</div>
<div className="absolute inset-0 z-3 bg-black opacity-40"></div>
    </div>
    <div id="projects" className="w-full bg-primary py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.div
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden border rounded-lg shadow-md bg-white cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
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
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default page

