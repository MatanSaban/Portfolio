const TestiItem = (props) => {
    return ( 
        <article className='testimonial'>
            <div className="client__avatar">
                <img src={props.avatar} alt={props.altText} />
            </div>
            <h5 className='client__name'>{props.clientName}</h5>
            <small className='client__review'>{props.clientReview}</small>
        </article>

     );
}
 
export default TestiItem;