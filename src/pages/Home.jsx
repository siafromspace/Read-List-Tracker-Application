import Navbar from "../components/Navbar";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
// import { useState } from "react";

const Home = () => {

    // const sliderSettings = {
    //     dots: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     autoPlay: true,
    //     autoPlaySpeed: 2000
    // }

    const quotes = [
        {
            author: "Charles W. Eliot",
            text: "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers."
        },
        {
            author: "Carl Sagan",
            text: "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time."
        },
        {
            author: "Bill Patterson",
            text: "Rainy days should be spent at home with a cup of tea and a good book."
        },
        {
            author: "E.B. White",
            text: "Books are good company, in sad times and happy times, for books are people – people who have managed to stay alive by hiding between the covers of a book."
        },
        {
            author: "John Green",
            text: "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book."
        }
    ]

    return (
        <section className="flex flex-col gap-8 md:flex-row w-full">
            <Navbar />
            <main className="flex justify-center w-full">
                <div className="flex flex-col gap-8 sm:gap-12 p-4 md:p-0">
                    <h1 className="text-3xl text-hibiscus font-bold md:mt-12 sm:text-center">Hello, Sharon. Get Reading !</h1>

                    <div className="bg-white md:max-w-3xl p-2 space-y-4">
                        <p className="font-light">{quotes[0].text}</p>
                        <p className="font-medium">{quotes[0].author}</p>
                    </div>

                    <div className="grid grid-cols-1 text-bon-jour sm:grid-cols-2 gap-6 md:max-w-3xl">
                        <div className="bg-livid-brown py-6 px-4 max-w-sm">
                            <p classsName="font-medium">To Be Read</p>
                            <p className="font-light"><span>32</span> books in the list</p>
                        </div>
                        <div className="bg-livid-brown py-6 px-4 max-w-sm">
                            <p className="font-medium">Finished</p>
                            <p className="font-light"><span>32</span> books finished this year</p>
                        </div>
                    </div>
                    <Link to="/new" className="bg-hibiscus px-4 py-4 rounded-xl text-lg text-bon-jour text-center w-full sm:w-96 sm:mx-auto md:mt-12">Add New Book</Link>
                </div>
            </main>
        </section>
    );
}

export default Home;