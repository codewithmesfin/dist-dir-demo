import React from 'react'
import Image from 'next/image'
import AchievementSection from '@/components/sections/AchievementSection'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TeamSection from '@/components/sections/TeamSection'
const page = () => {
  return (
    <>
    <Header/>
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 mx-6  md:mx-8">
<Image 
className='w-80 mx-auto mb-3 rounded-sm'
src="/furtu.png"
alt='furtuu company logo'
width={100}
height={300}
/>

<div className="col-span-2 flex flex-col justify-center items-center gap-2">
      <p><span className='font-bold'>Furtuu Construction</span>  is a leading construction company committed to delivering exceptional building solutions. With a strong foundation built on [number] years of experience, we specialize in [list of specialties, e.g., residential, commercial, industrial]. Our team of skilled professionals is dedicated to providing top-quality services, from initial concept to project completion.</p>
      <p>We pride ourselves on our commitment to [core values, e.g., quality, innovation, sustainability, client satisfaction]. By leveraging the latest technologies and industry best practices, we consistently deliver projects that exceed expectations.</p>
      <p>Whether  you&apos;re looking to build a new home, renovate an existing property, or undertake a large-scale commercial
1  project, Furtu Construction is your trusted partner.</p>
    </div>
    </div>
   <AchievementSection/>
   
<TeamSection/>
   <Footer/>
    </>
  )
}

export default page