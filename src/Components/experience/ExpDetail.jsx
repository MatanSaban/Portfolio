
const ExpDetail = (props) => {
    return ( 
        <article className='experience__details'>
            {props.icon}
            <div>
                <h4>{props.title}</h4>
                <small className='text-light'>{props.state}</small>
            </div>
        </article>

     );
}
 
export default ExpDetail;