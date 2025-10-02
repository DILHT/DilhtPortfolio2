import Hero from './Components/Hero';
import About from './Components/About' 
import Projects from './Components/Projects'
import Skills from './Components/Skills'
// import Experience from './Components/Experience'
import Contact from './Components/Contact'
// import Footer from './Components/Footer'  
// import ThemeToggle from './Components/ThemeToggle'
import { NavBar } from './Components/Navbar';
import { Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <div className="w-full absolute z-10 top-0">
            <NavBar/>
            </div>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<h1>404-ha ha page not found</h1>} />
    </Routes> 
    <div className="font-sans">
      {/* <ThemeToggle /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
    </>
  )
}

export default App
