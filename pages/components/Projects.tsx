
import Image from "next/image";
import React from "react";
import PinContainer from "./ui/3d-pin"



const Projects = () => {
  return (
    <div id="projects"className="h-screen w-full p-10 z-[1] mt-12">
      <h1 className="font-semibold text-5xl text-black max-sm:text-3xl">Project Showcase.</h1>
<div className="flex items-center justify-center gap-2 mt-[5rem]">

      {
        Data.map(({id,title,img,desc,href}) => (
          <PinContainer href={href} title={title} className="max-sm:w-[20rem] " key={id}>
          
          <a href={href} target="_blank" className="inter-var" >
            
            
            <div className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border  ">
              
              
              <div  className="w-full mt-4">
                <Image
                  src={img}
                  width="1000"
                  height="1000"
                  className="h-60 w-full object-cover  "
                  alt="thumbnail"
                />
              </div>
              
                <div  className="p-10 w-full flex items-center justify-between items-center flex-col gap-4">
              <div>
              <h2 className="font-semibold text-3xl mt-2">{title}</h2>
              </div>
                <div>
                <div className="text-xs text-slate-400 text-center">
                  {desc}
                </div>
                </div>
                </div>
              
            </div>
              
          </a>
            </PinContainer>
          
        ))
      }
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
  }
]