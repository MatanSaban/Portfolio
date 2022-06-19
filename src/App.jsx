import About from "./Components/about/About.jsx";
import Header from "./Components/header/Header.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Experience from "./Components/experience/Experience.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Nav from "./Components/nav/Nav.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Services from "./Components/services/Services.jsx";
import Testimonials from "./Components/testimonials/Testimonials.jsx";
import { createContext, useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import {AiFillCheckCircle} from 'react-icons/ai'

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };


    const [sectionOnScroll, setSectionOnScroll] = useState();


    const changeNavIconActive = (activeNavIcon) => {
      setSectionOnScroll(activeNavIcon);
    }
    useEffect(() => {
      
    },[setSectionOnScroll])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <>
                    <Header checkNav={changeNavIconActive}/>
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
                        sectionOnScroll={sectionOnScroll}
                    />
                    <About checkNav={changeNavIconActive}/>
                    <Experience checkNav={changeNavIconActive}/>
                    {/* <Services checkNav={changeNavIconActive}/> */}
                    <Portfolio checkNav={changeNavIconActive}/>
                    {/* <Testimonials checkNav={changeNavIconActive}/> */}
                    <Contact checkNav={changeNavIconActive}/>
                    <Footer />
                </>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
