const ContactOpt = (props) => {
    return ( 
        <article className="contact__option">
            {props.icon}
            <h4>{props.title}</h4>
            <h5>{props.content}</h5>
            <a href={props.link} target='_blank' rel="noreferrer">{props.linkText}</a>
        </article>

     );
}
 
export default ContactOpt;