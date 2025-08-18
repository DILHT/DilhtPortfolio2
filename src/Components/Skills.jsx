    import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

    const data = [
    { subject: 'Frontend', A: 90, fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'AI/ML', A: 75, fullMark: 100 },
    { subject: 'Game Dev', A: 70, fullMark: 100 },
    { subject: 'Creativity', A: 95, fullMark: 100 },
    ];

    export default function Skills() {
    return (
        <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Daniel" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
        </section>
    );
    }
