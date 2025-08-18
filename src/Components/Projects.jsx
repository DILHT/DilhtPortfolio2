    export default function Projects() {
    const projects = [
        { title: "AI Chatbot", category: "AI/ML", gif: "/chatbot.gif" },
        { title: "3D Game", category: "Games", gif: "/game.gif" },
        { title: "Portfolio Website", category: "Web", gif: "/web.gif" },
    ];

    return (
        <section className="py-20 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {projects.map((proj) => (
            <div key={proj.title} className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition">
                <img src={proj.gif} alt={proj.title} className="rounded mb-2" />
                <h3 className="font-semibold text-xl">{proj.title}</h3>
                <p className="text-sm text-gray-500">{proj.category}</p>
            </div>
            ))}
        </div>
        </section>
    );
    }
