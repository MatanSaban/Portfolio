import ServicesListItem from './ServicesListItem';

const ServicesCard = (props) => {
    return ( 
        <article className='service'>
            <div className="service__head">
                <h3>{props.title}</h3>
            </div>
            <ul className='service__list'>
                {
                    props.listItems.map((i, index) => {
                        return <ServicesListItem key={index} icon={i.props.icon} text={i.props.text}/>
                    })
                }
            </ul>
        </article>        
     );
}
 
export default ServicesCard;