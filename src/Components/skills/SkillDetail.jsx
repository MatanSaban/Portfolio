
const SkillDetail = (props) => {
    return ( 
        <article className='skills__details'>
            {props.icon}
            <div>
                <h4>{props.title}</h4>
                <small className='text-light'>{props.state}</small>
            </div>
        </article>

     );
}
 
export default SkillDetail;