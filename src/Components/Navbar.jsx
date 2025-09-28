
export const NavBar = () => {

    const links = [
            {name:"Home"},
            {name:"Project"},
            {name:"Skills"},
            {name:"Contact"},
            {name:"Education"}
    ]

    return (
        <div className="max-w-7xl mx-auto z-10 flex justify-center space-x-6 border-1 rounded-4xl p-6">
            {links.map(link =>{
            return (
            
            <a href="#" key={link.name} className="text-blue text-xl">{link.name}</a>
        
        )
            })}

        </div>

    )

}