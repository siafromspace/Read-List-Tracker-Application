import { Link } from "react-router-dom"
import Slider from "react-slick";
import Image from "../assets/books.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
    const sliderSettings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false
    }
    return (
        <section>
            <Slider {...sliderSettings}>
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
            </Slider>
        </section>
    );
}

export default Carousel;