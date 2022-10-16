// import { Link } from "react-router-dom"
import Slider from "react-slick";
import Image from "../assets/books.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
    }
    return (
        <section>
            <Slider {...sliderSettings}>
                <div>
                    <figure>
                        <img src={Image} alt="" />
                        <figcaption>Get Started With Biblio</figcaption>
                    </figure>
                    <figure>
                        <img src={Image} alt="" />
                        <figcaption>Get Started With Biblio</figcaption>
                    </figure>
                    <figure>
                        <img src={Image} alt="" />
                        <figcaption>Get Started With Biblio</figcaption>
                    </figure>
                </div>
            </Slider>
            <Link to="/home">Go Home</Link>
        </section>
    );
}

export default Carousel;