
    // eslint-disable-next-line no-unused-vars
    import { motion } from "framer-motion";
    import { Typewriter } from "react-simple-typewriter";
    import { useState } from "react";
    import Silk from "./Silk";
    import { NavBar } from "./Navbar";
// import GradientText from "../util/textgradient";
    // import  DarkVeil from "../util/DarkVeil";

    export default function Hero() {

        const [cursorVisible, setCursorVisible] = useState(true);


    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-gradient-to-bl from-[#000818] to-black overflow-x-hidden">
        
        {/* Background Video with controls */}
        
        {/* <img
            src="/images/tech.jpg"
            alt="Background image"
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
            /> */}
            <div className="absolute inset-0 z-0">
            <Silk
            speed={5}
            scale={1}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
            
            />
            </div>
            {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <DarkVeil />
            </div> */}

        {/* Overlay gradient */}
        {/* <div className="absolute inset-1 z-10 bg-gradient-to-t from-black/50 via-black/80 to-transparent">
        <img src="/images/programmer.gif"  alt="coder" className="rounded-full w-70"/>
        
        </div> */}

        <div className="w-full absolute z-10 top-0">
        <NavBar/>
        </div>
        {/* Main Content */}
        <div className="relative z-10 px-4">
            <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
            >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-white">
            <Typewriter
                words={["Hi There","I am Daniel Kasambala"]}
                loop={1}
                cursor={!cursorVisible}
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={90}
                delaySpeed={3000}
                onLoopDone={() => setCursorVisible(true)}
                />
                {/* This span replaces the cursor after typing is done */}
                {cursorVisible && <span style={{ display: "inline-block", width: "1ch" }} />}
            </span>
            
            </motion.h1>

            <motion.p
            initial={{ opacity: 0 ,y:0}}
            animate={{ opacity: 1, y:0 }}
            transition={{ delay: 1, duration: 3}}
            className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto px-2"
            >
            Full-Stack Developer 💻 | AI Enthusiast 🤖 | Game Dev Explorer 🎮 
            
            </motion.p>

            {/* Buttons */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4"
            >
            <button className="w-full sm:w-auto bg-transparent border border-white text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-white hover:text-purple-700 transition font-medium">
                View Projects
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-purple-700 transition font-medium">
                Contact Me
            </button>
            </motion.div>
        </div>
        </section>
    );
    }