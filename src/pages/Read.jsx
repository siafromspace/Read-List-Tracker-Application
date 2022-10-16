import Navbar from "../components/Navbar";
import { FaStar, FaBook } from "react-icons/fa"

const Read = ({ books }) => {
    return (
        <section className="flex flex-col gap-8 md:flex-row w-full h-full">
            <Navbar />
            <main className="w-full flex flex-col items-center py-8 px-4 space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl text-hibiscus font-bold text-center">Completed Books</h1>
                    <p className="italic text-lg text-black text-center">Books I am presently reading...</p>
                </div>
                <div className="w-full max-w-3xl space-y-6">
                    {books.map(book => {
                        return (
                            <div key={book.id} className="flex justify-between items-center bg-white w-full rounded-lg px-4 py-4 relative">
                                <div className="flex items-center gap-12">
                                    <FaBook className="text-5xl md:text-7xl" />
                                    <div>
                                        <h2 className="font-bold text-xl text-black">{book.title}</h2>
                                        <p className="font-light text-black ">by {book.author}</p>
                                        <p className="text-black text-sm inline">Your rating:
                                            <span className="inline-flex gap-1">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </span>
                                        </p>
                                        <p className="text-black text-xs">Read from: <span>10/16/2022 - 10/16/2022</span></p>
                                    </div>
                                    <button className=" bg-[#880808] text-white  px-4 py-2 absolute rounded-md cursor-pointer right-4">Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </section>
    );
}

export default Read;