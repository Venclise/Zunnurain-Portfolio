import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import  Spotlight  from "./components/ui/Spotlight";


const Home = () => {
  
  return (
    <main className="h-max w-full">
      <div className="h-screen w-full">
        <Spotlight fill="#000"/>
             <Hero />
      </div>
      <About />
      <Projects />
      <Footer />
      
       </main>
  )
}

export default Home;