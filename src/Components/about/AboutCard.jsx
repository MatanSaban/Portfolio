const AboutCard = (props) => {
    return ( 
        <article className="about__card">
            {props.icon}
            <h5>{props.expTitle}</h5>
            <small>{props.expDetailed}</small>
        </article>

     );
}
 
export default AboutCard;