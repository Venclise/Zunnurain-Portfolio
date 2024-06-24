
import Image from "next/image";


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';



const Projects = () => {
  return (
    <div id="projects"className="h-max w-full p-10 z-[1] mt-12 ">
      <h1 className="font-semibold text-5xl text-black max-sm:text-3xl">Project Showcase.</h1>

<div className="flex items-center gap-1 mt-12">

  <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      1080: {
         slidesPerView: 2,
      },
      576: {
        
        slidesPerView: 2,
      },
      768: {
       
        slidesPerView: 1,
      },
    }}

    modules={[Pagination]}
    className="mySwiper"
  >
      {
        Data.map(({id,title,img,desc,href,tag}) => (

          <SwiperSlide key={id}>
          
          
          <a href={href} target="_blank" className="inter-var" >
            
            
            <div className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[30rem] h-[30rem] rounded-xl border hover:shadow-xl  transition-all max-sm:w-[20rem]">
              
              
              <div  className="w-full mt-4">
                <Image
                  src={img}
                  width="1000"
                  height="1000"
                  className="h-60 w-full object-cover  "
                  alt="thumbnail"
                />
              </div>
              
                <div  className="p-10 w-full flex   flex-col gap-4">
              <div>
              <h2 className="font-semibold text-3xl mt-2">{title}</h2>
              </div>
                <div>
                <div className="text-md text-slate-700 max-sm:text-sm ">
                  {desc}
                </div>
                  <p className="bg-green-200 border border-gray-200 rounded-full mt-2 text-gray-600 w-max pl-2 pr-2 ">{tag}</p>
                </div>
                </div>
              
            </div>
              
          </a>
            </SwiperSlide>
            
        ))
      }

  </Swiper>
      </div>
       
      </div>
  )
} 


export default Projects;

const Data = [
  {
    id: 1,
    title: "BrainAI",
    desc: "BrainAI Your gateway to transformative AI-driven solutions",
    img: "/brain-ai.png",
    tag: "Landing page",
    href: "https://brain-ai-two.vercel.app/"
  },
  {
    id: 2,
    title: "SkyCast",
    desc: "A live weather data plaform",
    img: "/skycast.png",
    tag: "front-end",
    href:"https://skycast-blond.vercel.app/",
  }
]