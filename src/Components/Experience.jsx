import { motion } from "framer-motion";

const Experience = () => {

    return (
    <section className="py-20 bg-gray-100">
    <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
    <ul className="max-w-4xl mx-auto space-y-6">
        <motion.li whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-lg shadow-lg">
        2023 - Web & AI Projects
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-lg shadow-lg">
        2022 - Internship in Game Dev
        </motion.li>
    </ul>
    </section>
    )
}

export default Experience;