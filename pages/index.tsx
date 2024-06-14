import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects"
import { BackgroundBeams } from "./components/ui/background-beams";


const Home = () => {
  
  return (
    <main className="h-max w-full bg-black pb-10">
      
      
      <BackgroundBeams />
        <div className="flex items-center justify-center w-full h-screen hero ">
             <Hero />
          </div>
      <div>
        <About />
       </div>
      <div>
      <Projects />
      </div>
       </main>
  )
}

export default Home;