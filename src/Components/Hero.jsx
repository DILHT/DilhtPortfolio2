import { motion } from "framer-motion";
import Cube3D from './Cube';

    export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 to-pink-500 text-white">
        <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
        >
            Daniel Kasambala
        </motion.h1>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl mb-8"
        >
            Full-Stack Developer | AI Enthusiast | Game Dev Explorer | Creativity in Motion
        </motion.p>
        <Cube3D />
        <div className="mt-8 flex gap-4">
            <button className="bg-white text-purple-700 px-6 py-2 rounded hover:bg-purple-200 transition">
            View Projects
            </button>
            <button className="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-purple-700 transition">
            Contact Me
            </button>
        </div>
        </section>
    );
    }
