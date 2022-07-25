import CTA from './CTA';
import './header.css'
import ME from '../../assets/profileimg.png'
import HeaderSocials from './HeaderSocials';
import { useRef } from 'react';
import {useInViewport} from 'react-in-viewport';
import TypeWriterEffect from 'react-typewriter-effect';


const Header = (props) => {

    const myRef = useRef();
    const {inViewport} = useInViewport(myRef);

    
    return ( 
        <header id='header' ref={myRef}>
            {inViewport && props.checkNav('header')}
            <div className="container header__container">
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Consolas' }}
                    startDelay={100}
                    cursorColor="transparent"
                    text="Hello I'm"
                    typeSpeed={100}
                />
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Consolas' }}
                    startDelay={1500}
                    cursorColor="transparent"
                    text="Matan Saban"
                    typeSpeed={100}
                />
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Consolas' }}
                    startDelay={3000}
                    cursorColor="transparent"
                    text="And I Am A Full Stack Web Developer."
                    typeSpeed={100}
                />

                <CTA/>
                <HeaderSocials />
                <a href="#about" className='scroll__down'>Scroll Down</a>
                <br /><br />
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Consolas' }}
                    startDelay={7000}
                    cursorColor="transparent"
                    text="My Skills Are : "
                    typeSpeed={100}
                />
                <TypeWriterEffect
                    textStyle={{ fontFamily: 'Consolas' }}
                    startDelay={8500}
                    cursorColor="transparent"
                    text="HTML | CSS | JS | React | Node.js | PHP | Python | MySQL | MongoDB "
                    typeSpeed={100}
                />


            </div>
        </header>
     );
}
 
export default Header;