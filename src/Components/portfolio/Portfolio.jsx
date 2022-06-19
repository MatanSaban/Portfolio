import "./portfolio.css";
import IMG from "../../assets/profileimage.jpg";
import PortfolioItem from "./PortfolioItem";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = (props) => {
    const myRef = useRef();
    const { inViewport } = useInViewport(myRef);

    return (
        <section id="portfolio" ref={myRef}>
            {inViewport && props.checkNav("portfolio")}
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                >
                    <SwiperSlide>
                        <PortfolioItem
                            imageSrc={IMG}
                            title={"This is a portfolio item title"}
                            github={"https://github.com/matansaban"}
                            liveDemo={"https://github.com"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PortfolioItem
                            imageSrc={IMG}
                            title={"This is a portfolio item title"}
                            github={"https://github.com/matansaban"}
                            liveDemo={"https://github.com"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PortfolioItem
                            imageSrc={IMG}
                            title={"This is a portfolio item title"}
                            github={"https://github.com/matansaban"}
                            liveDemo={"https://github.com"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PortfolioItem
                            imageSrc={IMG}
                            title={"This is a portfolio item title"}
                            github={"https://github.com/matansaban"}
                            liveDemo={"https://github.com"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PortfolioItem
                            imageSrc={IMG}
                            title={"This is a portfolio item title"}
                            github={"https://github.com/matansaban"}
                            liveDemo={"https://github.com"}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Portfolio;
