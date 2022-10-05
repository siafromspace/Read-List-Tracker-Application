import Navbar from "../components/Navbar";

const Home = () => {
    const quotes = [
        {
            author: "Charles W. Eliot",
            quote: "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers."
        },
        {
            author: "Carl Sagan",
            quote: "One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time."
        },
        {
            author: "Bill Patterson",
            quote: "Rainy days should be spent at home with a cup of tea and a good book."
        },
        {
            author: "E.B. White",
            quote: "Books are good company, in sad times and happy times, for books are people – people who have managed to stay alive by hiding between the covers of a book."
        },
        {
            author: "John Green",
            quote: "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book."
        }
    ]
    return (
        <section className="flex gap-4">
            <Navbar />
            <main>
                <h1>Hello, Sharon. Get Reading !</h1>
                <div>
                    <div>
                        <p>To Be Read</p>
                        <p><span>32</span> books in the list</p>
                    </div>
                    <div>
                        <p>Finished</p>
                        <p><span>32</span> books finished this year</p>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Home;