    export default function Projects() {
    const projects = [
        { title: "AI Powered Fact Checking System", category: "AI/ML", gif: "/images/ai_fact.jpg", description:"A full-stack web app designed as my final year project. It evaluates online content credibility using AI models, FastAPI microservices, and MongoDB storage. The frontend, built in Next.js, provides a smooth user interface for real-time fact-checking.", tech:["Next.js", "FastAPI", "MongoDB", "LangChain"] },
        { title: "SilentStorm 3D Game", category: "Games", gif: "/images/3dGame.jpg", description:"Inspired by Zelda-style gameplay, this 3D Android game features character switching, combat mechanics, and coin collection. Built during a university assignment to explore game design and interactive storytelling." , tech:["Godot" ,"GDScript"] },
        {title: "SplitSmart App", category: "Mobile App", gif: "/images/split.jpg", description:"a Mobile app for splitting bills and managing group expenses. It includes features like real-time expense tracking, payment reminders, and user-friendly interfaces." ,tech:["ReactNative","Nodejs","Expressjs","MongoDB"]},
        { title: "DevConnect API ", category: "API ", gif: "/images/codein.jpg", description:"A RESTful API I built to support developer networking and project collaboration. Features include authentication, data storage, and secure endpoints.", tech:["Node.js", " Express.js", "MYSQL"]  },
        { title: "Lumina ", category: "Mobile App", gif: "/images/breath.jpg", description:"A mobile app offering secure login and real-time chatbot support for mental health guidance. Focused on usability, cross-platform compatibility, and user engagement." , tech:["Flutter"," Firebase" , "API"] },
        { title: "Mowebd ", category: "Movie Website", gif: "/images/movie.jpeg" ,description:"A responsive React application that fetches and displays movie information using the TMDB API. Demonstrates API integration, UI/UX design, and dynamic data rendering.", tech:["React", "TMDB API"] },


    ];

    return (
        <section className="bg-slate-800 bg-cover  py-2 text-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 ">
            {projects.map((proj) => (
            
            
            <div key={proj.title} className="bg-white  rounded-lg shadow-lg hover:scale-105 transition">
                <img src={proj.gif} alt={proj.title} className="rounded-t-lg w-full h-48 object-cover mb-2" />
                <div className="p-4 pt-2">
                <h3 className="font-semibold text-xl">{proj.title}</h3>
                <p className="text-sm text-gray-500">{proj.category}</p>
                <p>{proj.description}</p>

                {/* Listing the items in the tech stack */}
                <p className=" text-sm mt-6 font-bold p-4">
                    {proj.tech.map((tech,i)=>(
                    <span key={i} className="bg-cyan-400  p-2 rounded-full  font-bold ml-0 m-0.5 shadow-2xl shadow-blue-600">{tech}</span>
                
                )
                
                )}</p>
                </div>
            </div>
            
            ))}
        </div>
        </section>
    );
    }
