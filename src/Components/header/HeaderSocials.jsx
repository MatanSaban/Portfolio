import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {GoMarkGithub} from 'react-icons/go';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {RiWhatsappFill} from 'react-icons/ri';
import {BsEnvelopeFill} from 'react-icons/bs';

const HeaderSocials = () => {
    return ( 
        <div className="header__socials">
            <a href="https://linkedin.com/in/matansaban"><BsLinkedin/></a>
            <a href="https://github.com/in/matansaban"><GoMarkGithub/></a>
            <a href="https://facebook.com/in/matansaban"><BsFacebook/></a>
            <a href="tel:+972527984133"><BsFillTelephoneOutboundFill/></a>
            <a href="https://wa.me/+972527984133"><RiWhatsappFill/></a>
            <a href="mailto:matansaban28@gmail.com"><BsEnvelopeFill/></a>
        </div>
     );
}
 
export default HeaderSocials;