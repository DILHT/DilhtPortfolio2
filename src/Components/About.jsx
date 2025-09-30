export default function About() {
    return (
        <section className="bg-gray-700 py-16">
        <h1 className="text-4xl text-white font-bold text-center mb-10">About Me</h1>

        <div className="container mx-auto flex flex-col md:flex-row items-center  gap-5 px-6">
            
            {/* Text Section */}
            <div className="flex-1 flex items-center">
            <p className="text-white text-lg leading-relaxed">
                I’m <span className="font-semibold text-green-600">Daniel Kasambala</span>, a Computer Science graduate (2021–2025) with hands-on experience in<span className="text-indigo-600"> full-stack development</span>,<span className=" text-cyan-600"> game creation (Godot)</span>, <span className="text-teal-600">AI/ML models</span>, and <span className="text-green-600">APIs</span>.  
                <br /><br />
                I’ve built solutions that bridge technology and creativity. Off the screen, I lead my university’s dance club—because innovation, like rhythm, comes alive in motion.
            </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center">
            <img
                src="/images/profile.jpg"
                alt="Daniel Kasambala"
                className="w-full max-w-sm h-full object-cover rounded-lg shadow-lg border-8 border-l-green-600 border-t-indigo-600 border-r-cyan-600 border-b-teal-600"
            />
            </div>
        </div>
        </section>
    );
}
