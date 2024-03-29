import "./services.css";
import ServicesCard from "./ServicesCard";
import { BiCheck } from "react-icons/bi";
import ServicesListItem from "./ServicesListItem";
import { useRef } from "react";
import {useInViewport} from 'react-in-viewport';

const Services = (props) => {
    const myRef = useRef();
    const {inViewport} = useInViewport(myRef);

    return (
        <section id="services" ref={myRef}>
            {inViewport && props.checkNav('services')}
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <ServicesCard
                    title={"UI/UX Design"}
                    listItems={[
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                    ]}
                />
                <ServicesCard
                    title={"Web Development"}
                    listItems={[
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                    ]}
                />
                <ServicesCard
                    title={"Content Creation"}
                    listItems={[
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                        <ServicesListItem
                            icon={<BiCheck className="service__list-icon" />}
                            text={
                                "Lorem ipsum dolor sit, amet consectetur elit."
                            }
                        />,
                    ]}
                />
            </div>
        </section>
    );
};

export default Services;
