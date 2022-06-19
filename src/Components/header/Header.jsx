import CTA from './CTA';
import './header.css'
import ME from '../../assets/profileimg.png'
import HeaderSocials from './HeaderSocials';
import { useRef } from 'react';
import {useInViewport} from 'react-in-viewport';

const Header = (props) => {

    const myRef = useRef();
    const {inViewport} = useInViewport(myRef);

    
    return ( 
        <header id='header' ref={myRef}>
            {inViewport && props.checkNav('header')}
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Matan Saban</h1>
                <h5 className="text-light">
                    Full Stack Developer
                </h5>
                <CTA/>
                <HeaderSocials />
                {/* <div className="me">
                    <img src={ME} alt="me" />
                </div> */}
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
     );
}
 
export default Header;