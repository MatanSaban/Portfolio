import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsGrid1X2} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BsChatQuote} from 'react-icons/bs'
import { useEffect, useState } from 'react'


const Nav = (props) => {

    const [activeNav, setActiveNav] = useState('header');
    

    useEffect(() => {
        setActiveNav(props.sectionOnScroll);
    });

    return ( 
        <nav>
            <a href="#header" onClick={() => setActiveNav('header')} className={activeNav === 'header' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook/></a>
            {/* <a href="#services" onClick={() => setActiveNav('services')} className={activeNav === 'services' ? 'active' : ''}><RiServiceLine/></a> */}
            <a href="#portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><BsGrid1X2/></a>
            {/* <a href="#testimonials" onClick={() => setActiveNav('testimonials')} className={activeNav === 'testimonials' ? 'active' : ''}><BsChatQuote/></a> */}
            <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
            {props.themeMode}
        </nav>
     );
}
 
export default Nav; 