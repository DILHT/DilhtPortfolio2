    // // import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

    // // const data = [
    // // { subject: 'Frontend', A: 90, fullMark: 100 },
    // // { subject: 'Backend', A: 85, fullMark: 100 },
    // // { subject: 'AI/ML', A: 75, fullMark: 100 },
    // // { subject: 'Game Dev', A: 70, fullMark: 100 },
    // // { subject: 'Creativity', A: 95, fullMark: 100 },
    // // ];

    // export default function Skills() {
    // return (
    //     <section className="py-20 bg-gray-900 text-white text-center">
    //     <h2 className="text-4xl font-bold mb-10">Skills</h2>
    //     <div className='flex justify-center'>        
    //         {/* <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
    //         <PolarGrid />
    //         <PolarAngleAxis dataKey="subject" />
    //         <PolarRadiusAxis />
    //         <Radar name="Daniel" dataKey="A" stroke="#CF3" fill="#CF3" fillOpacity={0.6} />
    //     </RadarChart> */}
    //     <img src='/images/python.png' alt='Python Image'  className='w-30 h-30 '/>
    //     </div>

    //     </section>
    // );
    // }

export default function Skills() {
    const skills = [
        { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Godot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" },
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, 
        { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        // { name: "GDScript", img: "https://img.icons8.com/?size=512&id=TuQ3sZsrrLqC&format=png" }
    ];

    return (
        <section className="py-20 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-bold mb-10">Skills</h2>
            
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center">
                        <img 
                            src={skill.img} 
                            alt={skill.name} 
                            className="w-20 h-20 object-contain mb-3 hover:scale-110 transition" 
                        />
                        <p className="text-sm md:text-base">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
