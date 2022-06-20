import "./about.css";
import ME from "../../assets/profileimage.jpg";
import { FiAward } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AboutCard from "./AboutCard";
import { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";

const About = (props) => {
    const myRef = useRef();
    const { inViewport } = useInViewport(myRef);

    const [readMore, setReadMore] = useState(false);

    const readMoreFunc = () => {
        setReadMore(!readMore)
    }

    return (
        <section id="about" ref={myRef}>
            {!inViewport && props.checkNav("header")}
            {inViewport && props.checkNav("about")}
            <h5>Get To Know</h5>
            <h2>About</h2>

            <div className="container about__container">
                <div className="about__me">
                    <img src={ME} alt="me" />
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <AboutCard
                            icon={<FiAward className="about__icon" />}
                            expTitle={"Experience"}
                            expDetailed={"2+ Years Working Experience"}
                        />
                        {/* <AboutCard
                            icon={<FiUsers className="about__icon" />}
                            expTitle={"Clients"}
                            expDetailed={"50+ From Israel"}
                        /> */}
                        <AboutCard
                            icon={<VscFolderLibrary className="about__icon" />}
                            expTitle={"Projects"}
                            expDetailed={"5+ Completed"}
                        />
                    </div>
                    <div className={readMore ? 'about__text': 'about__text partlyShown' }>
                        <p>
                            Hi, I'm Matan Saban And I am a Web Developer.<br/>
                            My first step in the internet started at 2004 when I was only 10 years old and got my first computer<br/>
                            At this year I built my very first only HTML website at the mythological "Nana" files uploading platform.<br/>
                            Since then, there was a lot going on and i got back to building websites when the COVID19 came up.<br/>
                            So in 2020 I started my own digital business with all the services that digital agency provides.<br/>
                            After one month in the business I understood that my greatest passion is to building websites for customers.<br/>
                            Something about the deep thinking and creation cought me very hard.<br/>
                            From that point I started to learn by myself everything that is related, from Wordpress &amp; Elementor to SEO, HTML, Css, Javascript and PHP.<br/>
                            After learning PHP and working with it with my real customers, i wanted to learn JS better and started to involve it more in my projects,<br/>
                            In this year (2002) I decided it's not enough and I signed up to a Full Stack (MERN) Boothcamp.<br/>
                            In the course I learned HTML, CSS &amp; JS all over again in order to ensure i dont have any knowledge missing.<br/>
                            After that, we started to learn React, Node.js, working with MongoDB and Python.<br/>
                            We learned how to build server with Python and Nodejs, created websites that works with external API's and more.<br/>
                        </p>
                        <button onClick={readMoreFunc} className={readMore ? 'showLess' : 'showMore'}>{readMore ? 'Show Less' : 'Show More'}</button>
                    </div>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
