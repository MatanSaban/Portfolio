import "./testimonials.css";
import AVTR from "../../assets/profileimage.jpg";
import TestiItem from "./TestiItem";


// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";



const Testimonials = (props) => {
    const myRef = useRef();
    const {inViewport} = useInViewport(myRef);

    return (
        <section id="testimonials" ref={myRef}>
            {inViewport && props.checkNav('testimonials')}
            <h5>Reviews From Clients</h5>
            <h2>Testimonials</h2>
            <div className="container testimonials__container">
                <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={40}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={true}
                        loop={true}
                >
                    <SwiperSlide>
                        <TestiItem
                            avatar={AVTR}
                            altText={"Client Avatar Image"}
                            clientName={"Client Name"}
                            clientReview={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga labore rem error eligendi eos officia numquam nam. At, asperiores repellendus. Ea, inventore ipsam fugiat dicta laudantium sint distinctio voluptatum."
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestiItem
                            avatar={AVTR}
                            altText={"Client Avatar Image"}
                            clientName={"Client Name"}
                            clientReview={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga labore rem error eligendi eos officia numquam nam. At, asperiores repellendus. Ea, inventore ipsam fugiat dicta laudantium sint distinctio voluptatum."
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestiItem
                            avatar={AVTR}
                            altText={"Client Avatar Image"}
                            clientName={"Client Name"}
                            clientReview={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga labore rem error eligendi eos officia numquam nam. At, asperiores repellendus. Ea, inventore ipsam fugiat dicta laudantium sint distinctio voluptatum."
                            }
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
