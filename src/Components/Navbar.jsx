import  { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from 'react-icons/md';
import { MdOutlineMenu } from 'react-icons/md';

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const links = [
            {name:"Home",href:"#"},
            {name:"Project",href:"#projects"},
            {name:"Skills",href:"#skills"},
            {name:"Contact",href:"#contact"},
            {name:"Education",href:"#education"},
    ]

    return (
        <nav className="w-full fixed top-0 left-0 z-20 bg-black/30 backdrop-blur-md">

        
        <div className="max-w-7xl  flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <h1 className="text-white text-2xl font-bold ">DK</h1>

                {/* Desktop Menu */}
                <div className="hidden sm:flex space-x-2 mx-0">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg hover:text-blue-500 transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="sm:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <MdClose/> : <MdOutlineMenu/>}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden flex flex-col items-center w-full space-y-4 pb-6"
                    >
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white text-lg hover:text-blue-500 transition"
                                onClick={() => setIsOpen(false)} // close after click
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>

    )

}