import React from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhyUs from '@/components/sections/WhyUs'
import ServicesSection from '@/components/sections/ServicesSection'
import Testimonials from '@/components/sections/Testimonials'

const page = () => {
  return (
    <> <Header/>
    <div className='relative w-full h-96 overflow-hidden'>
 <Image src="/banner4.jpg"
 alt='banner image'
 className='w-full h-full rounded-sm mb-7 object-cover'
 width={200}
 height={200}
 />
<div className='flex flex-col justify-center items-center absolute inset-0 z-20'>
  <div className='opacity-1 transform-none'>
    <h2 className="text-2xl md:text-3xl font-bold text-slate-100">About</h2>
    </div>
    <div className='opacity-1 transform-none'><p className="md:text-xl text-lg font-semibold text-gray-300 mt-2 capitalize text-center">We provide efficient, fast and usefull Construction</p></div>

</div>
<div className="absolute inset-0 z-3 bg-black opacity-40"></div>
    </div>
<ServicesSection/>
<Testimonials/>
    <WhyUs/>
    <Footer/>
    </>
  )
}

export default page