
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
    return (
       <div className="flex items-center flex-col justify-center gap-6 ">
          
       <h1 className="font-bold text-white text-6xl text-center max-sm:text-4xl" >
          Designing seamless <br /> <span className="text-purple-300 font-semibold text-5xl"> User Experiences </span>
          </h1>
          <h2 className="text-lg text-center text-gray-400">👋🏻 Hy, I'm Zunnurain, a Web developer, Based in Pakistan</h2>

          <HoverBorderGradient className="text-gray-700 border-none bg-white ">
               See My Work
          </HoverBorderGradient>
          
       </div>
    )
}

export default Hero;