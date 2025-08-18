import Hero from './Components/Hero';
import About from './Components/About' 
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'  
import ThemeToggle from './Components/ThemeToggle'
import './App.css'

function App() {
  

  return (
    <>
    {/* <h1 className='text-4xl text-center'>DILHT PORTFOLIO</h1> */}
    <div className="font-sans">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
