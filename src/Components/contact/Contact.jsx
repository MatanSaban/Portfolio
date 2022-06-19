import './contact.css'
import {BsTelephoneForward} from 'react-icons/bs';
import {RiWhatsappFill} from 'react-icons/ri';
import {BsEnvelopeFill} from 'react-icons/bs';

import ContactOpt from './ContactOpt';

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

import { useInViewport } from "react-in-viewport";


const Contact = (props) => {
    const form = useRef();
    const [message, setMessage] = useState(false);

    const myRef = useRef();
    const {inViewport} = useInViewport(myRef);


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vubtku7', 'template_a7lqfz8', form.current, 'Y02FzGPyxlG7vKb5e')
          .then((result) => {
              e.target.reset();
              setMessage('Your Message Sent Successfully!');
          }, (error) => {
              setMessage('Message Did Not Sent Due To An Error! Please Try Again.');
          });
      };

      
    return ( 
        <section id='contact' ref={myRef}>
            {inViewport && props.checkNav('contact')}
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <ContactOpt icon={<BsEnvelopeFill/>} title={'Email'} content={'matansaban28@gmail.com'} link={'mailto:matansaban28@gmail.com'} linkText={'Send An Email'}/>
                    <ContactOpt icon={<RiWhatsappFill/>} title={'WhatsApp'} content={'(+972) 527984133'} link={'https://wa.me/+972527984133'} linkText={'Send Whatsapp Message'}/>
                    <ContactOpt icon={<BsTelephoneForward/>} title={'Phone'} content={'(+972) 527984133'} link={'tel:+972527984133'} linkText={'Call Me'}/>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                    {message}
                </form>
            </div>
        </section>
     );
}
 
export default Contact;