import {Grid} from "./ui/Grid"
import {HoverBorderGradient} from "./ui/hover-border-gradient"
import {MoveDown} from "lucide-react"
const Hero =() => {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
      
      <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="font-bold text-[9rem] max-md:text-8xl max-sm:text-6xl">WebDevloper.</h1>
      <h2 className="text-md font-normal text-gray-600 ml-4 tracking-widest text-center">👋🏻Hy,I'm <span className="font-semibold">Zunnurain </span>,a Web developer,Based in Pakistan.</h2>
        
          <HoverBorderGradient
            containerClassName="rounded-full ml-4 "
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center w-max"
          >
        <a href="#projects" className="flex items-center ">
            <span>Watch My Work  </span>
            <MoveDown className="h-[15px] w-[15px] ml-2"/>
        </a>
          </HoverBorderGradient>
      </div>
      
    </div>
  )
}

export default Hero