    export default function About() {
    return (
        <section className="py-20 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Character Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Daniel Kasambala</h3>
            <p className="mb-4">CS Graduate, Full-Stack Developer, AI & Game Dev Enthusiast, Loves Dance & Creativity</p>
            <ul className="flex flex-wrap gap-2">
                <li className="bg-purple-600 px-3 py-1 rounded">React</li>
                <li className="bg-pink-600 px-3 py-1 rounded">FastAPI</li>
                <li className="bg-yellow-600 px-3 py-1 rounded">Godot</li>
                <li className="bg-green-600 px-3 py-1 rounded">ML/AI</li>
            </ul>
            </div>
            {/* Timeline */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Journey</h3>
            <ul className="space-y-4">
                <li>2020: Started CS Degree</li>
                <li>2023: Full-Stack Projects & AI Experiments</li>
                <li>2025: Portfolio & Creative Projects</li>
            </ul>
            </div>
        </div>
        </section>
    );
    }
