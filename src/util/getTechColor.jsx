export function getTechColor(tech){
    const colors = {
        FastAPI: "#05998b"
    };
    return colors[tech] || "#5555"; 
}