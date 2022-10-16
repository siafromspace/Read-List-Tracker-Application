import Navbar from "../components/Navbar";
import { FaBookOpen } from "react-icons/fa"

const New = () => {
    return (
        <section className="flex flex-col gap-8 md:flex-row w-full h-full">
            <Navbar />
            <main className="w-full flex flex-col items-center py-8 space-y-8 px-4">
                <h1 className="text-hibiscus text-3xl font-bold text-center">What are you reading today?</h1>
                <FaBookOpen className="text-7xl text-black" />
                <form className="bg-white rounded-xl px-4 py-8 space-y-4 w-full max-w-3xl text-black">
                    <h2 className="text-2xl text-black font-semibold text-center">Add to your read list</h2>
                    <div className="space-y-2 grid">
                        <label htmlFor="title">Book Title</label>
                        <input type="text" placeholder="Enter Book Title" className="border border-venus rounded-lg h-12 px-2 placeholder-venus text-black focus:outline-black text-lg" />
                    </div>
                    <div className="space-y-2 grid">
                        <label htmlFor="author">Book Author</label>
                        <input type="text" placeholder="Enter Book Author" className="border border-venus rounded-lg h-12 px-2 placeholder-venus text-black focus:outline-black text-lg" />
                    </div>
                    <div className="space-y-2 grid">
                        <label htmlFor="book">Book Status</label>
                        <select name="book" id="book" className="border border-venus rounded-lg h-12 px-2 placeholder-venus text-black focus:outline-black text-lg">
                            <option>---</option>
                            <option value="tbr">Want To Read</option>
                            <option value="cr">Currently Reading</option>
                        </select>
                    </div>
                    <button className="bg-hibiscus text-bon-jour w-full py-4 text-center text-lg rounded-xl">Add</button>
                </form>
            </main>
        </section>
    );
}

export default New;