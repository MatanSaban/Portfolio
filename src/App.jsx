import About from "./Components/about/About.jsx";
import Header from "./Components/header/Header.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Experience from "./Components/experience/Experience.jsx";
import Footer from "./Components/footer/Footer.jsx";
import Nav from "./Components/nav/Nav.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Services from "./Components/services/Services.jsx";
import Testimonials from "./Components/testimonials/Testimonials.jsx";


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
