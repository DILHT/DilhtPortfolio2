import Footer from './Footer'
const Contact = () => {

        return (
        <>
        <section className="relative bg-[url('/images/profile.jpg')] bg-contain  py-20 bg-slate-900 text-white text-center">
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-gray-900"></div>
        <h2 className=" text-4xl font-bold mb-10 text-white z-10">Contact Me</h2>
        <form className="max-w-md mx-auto flex flex-col gap-4 bg-gray-800 opacity-90 p-6 rounded-lg shadow-lg">
            <input type="text" placeholder="Name" className="p-2 border-b-1 border-gray-600"/>
            <input type="email" placeholder="Email" className="p-2  border-b-1 border-gray-600"/>
            <textarea placeholder="Message" className=" border-b-1 p-2  border-gray-600"/>
            <button className="bg-purple-600 py-2 rounded hover:bg-purple-400 transition">Send Quest to Daniel?</button>
        </form>
    
        </section>
          <Footer/>
          </>
        )
    }

export default Contact;