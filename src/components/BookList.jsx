import { BsThreeDotsVertical } from "react-icons/bs"
import { FaBook } from "react-icons/fa"

const BookList = ({ books, handleClick, modalText }) => {
    return (
        <div className="w-full max-w-3xl space-y-6">
            {books.map(book => {
                return (
                    <div key={book.id} className="flex justify-between items-center bg-white w-full rounded-lg px-4 py-4 relative">
                        <div className="flex gap-6 items-center">
                            <FaBook className="text-5xl md:text-7xl" />
                            <div>
                                <h2 className="font-bold text-xl text-black">{book.title}</h2>
                                <p className="font-light text-black">{book.author}</p>
                            </div>
                        </div>
                        <BsThreeDotsVertical className="text-xl cursor-pointer" onClick={() => handleClick(book.id)} />
                        {book.showModal && <div className="absolute right-4 top-14 z-10 bg-venus text-sm p-2 text-bon-jour space-y-2 rounded-md">
                            <p className="cursor-pointer hover:border-b hover:border-bon-jour">{modalText}</p>
                            <p className="cursor-pointer hover:border-b hover:border-bon-jour">Delete Book</p>
                        </div>}
                    </div>
                )
            })}
        </div>
    );
}

export default BookList;