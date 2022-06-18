import "./about.css";
import ME from "../../assets/profileimage.jpg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsTelephoneOutbound } from "react-icons/bs";
import AboutCard from "./AboutCard";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About</h2>
            <div className="container about__container">
                <div className="about__me">
                    <img src={ME} alt="me" />
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <AboutCard icon={<FiAward className="about__icon"/>} expTitle={'Experience'} expDetailed={'2+ Years Working Experience'}/>
                        <AboutCard icon={<FiUsers className="about__icon"/>} expTitle={'Clients'} expDetailed={'50+ From Israel'}/>
                        <AboutCard icon={<VscFolderLibrary className="about__icon"/>} expTitle={'Projects'} expDetailed={'5+ Completed'}/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora beatae neque voluptate sed eaque obcaecati qui,
                        doloremque fugiat ipsa nostrum voluptatibus quos
                        commodi, debitis quis!
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk <BsTelephoneOutbound/></a>
                </div>
            </div>
        </section>
    );
};

export default About;
