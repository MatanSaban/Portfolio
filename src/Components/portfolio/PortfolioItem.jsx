const PortfolioItem = (props) => {
    return (
        <>
            <article
                className="portfolio__item"
                style={{
                    background: `url(${props.imageSrc})`,
                    backgroundPosition: "center",
                    height: "500px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:'20px'
                }}
            >
            </article>
            <div className="coverLayer" style={{background:'#00000040', height:'500px', width:'100%', position:'absolute', left:'0', top:'0', zIndex:'1', display:'flex', flexDirection:'column' ,alignItems:'center', justifyContent:'center' }}>
                <h3>{props.title}</h3>
                    <div className="portfolio__item-cta">
                        <a href={props.github} className="btn">
                            GitHub
                        </a>
                        <a
                            href={props.liveDemo}
                            className="btn btn-primary"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
            </div>
        </>
    );
};

export default PortfolioItem;
