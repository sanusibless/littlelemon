import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './TestimonalCard';
import testimonal1 from '../icons_assets/img/testimonial-1.jpg'
import testimonal2 from '../icons_assets/img/testimonial-2.jpg'
import testimonal3 from '../icons_assets/img/testimonial-3.jpg'
import testimonal4 from '../icons_assets/img/testimonial-4.jpg'

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        // centerMode: true,
        centerPadding: '50px',
        swipe: true,
        lazyLoad: 'ondemand',
      };

    const testimonials = [
        {
            name: "Collins",
            profession: "Software Developer",
            img: testimonal1,
            message: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
        },
        {
            name: "Favour",
            profession: "Project Manager",
            img: testimonal2,
            message: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
        },
        {
            name: "Sam",
            profession: "UX Designer",
            img: testimonal3,
            message: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
        },
        {
            name: "Rachel",
            profession: "Accountant",
            img: testimonal4,
            message: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
        }
    ];
    return (
        <section className='testimonials'>
            <div className='testimonials-container'>
                <h2 style={{
                    textAlign: 'center'
                }}>
                    Testimonials
                </h2>
            <Slider {...settings}>
                {
                    testimonials.map(testimonial => {
                        return <TestimonialCard {...testimonial}/>
                    })
                }
            </Slider>
            </div>
        </section>
    )
}