import About from "./Components/about/About.jsx";
import Header from "./Components/header/Header.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Experience from "./Components/experience/Experience.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Nav from "./Components/nav/Nav.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Services from "./Components/services/Services.jsx";
import Testimonials from "./Components/testimonials/Testimonials.jsx";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <>
                    <Header />
                    <Nav
                        themeMode={
                            <ReactSwitch
                                className="themeModeSwitcher"
                                onChange={toggleTheme}
                                checked={theme === "dark"}
                                uncheckedIcon={
                                  <AiFillCheckCircle style={{color:'var(--color-primary-lmode)', width:'100%', height:'100%'}}/>
                                }
                                checkedIcon={
                                  <AiFillCheckCircle style={{color:'var(--color-bg)', width:'100%', height:'100%'}}/>
                                }
                            />
                        }
                    />
                    <About />
                    <Experience />
                    <Services />
                    <Portfolio />
                    <Testimonials />
                    <Contact />
                    <Footer />
                </>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
