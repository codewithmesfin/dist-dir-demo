import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">
          Testimonials
        </h1>
        <div className="w-24 h-1 bg-orange-400 mx-auto -mt-4"></div>
        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1} 
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-custom-pagination",
            }}
            breakpoints={{
              480: { slidesPerView: 1 }, 
              768: { slidesPerView: 2 }, 
              1024: { slidesPerView: 3 }, 
            }}
            className="pb-8"
          >
            {testimonials.map((testimony) => (
              <SwiperSlide key={testimony.id} className="px-4">
                <div className="bg-black text-slate-100 p-6 rounded-md shadow-lg">
                  <div className="text-center mb-4">
                    <Image
                      src={testimony.image}
                      alt={testimony.author}
                      width={100}
                      height={100}
                      className="w-16 h-16 rounded-full mx-auto object-cover"
                    />
                    <h3 className="mt-2 text-lg font-bold">{testimony.author}</h3>
                    <p className="text-sm text-gray-400">{testimony.profession}</p>
                  </div>
                  <p className="text-center text-gray-300 italic">
                  &quot;{testimony.comment}&quot;
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
        <div className="swiper-custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
};

export default Testimonials;
