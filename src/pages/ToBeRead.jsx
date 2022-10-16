import Navbar from "../components/Navbar";
import BookList from "../components/BookList";

const ToBeRead = ({ books, handleClick }) => {
    return (
        <section className="flex flex-col gap-8 md:flex-row w-full h-full">
            <Navbar />
            <main className="w-full flex flex-col items-center py-8 px-4 space-y-8">
                <div className="space-y-4">
                    <h1 className="text-3xl text-hibiscus font-bold text-center">Want To Read</h1>
                    <p className="italic text-lg text-black text-center">Books I want to read...</p>
                </div>
                <BookList books={books} handleClick={handleClick} modalText="Start Reading" />
            </main>
        </section>
    );
}

export default ToBeRead;