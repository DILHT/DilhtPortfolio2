    
const Contact = () => {

        return (
        
        <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
        <form className="max-w-md mx-auto flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
            <input type="text" placeholder="Name" className="p-2 rounded"/>
            <input type="email" placeholder="Email" className="p-2 rounded"/>
            <textarea placeholder="Message" className="p-2 rounded"/>
            <button className="bg-purple-600 py-2 rounded hover:bg-purple-400 transition">Send Quest to Daniel?</button>
        </form>
        </section>
        )
    }

export default Contact;