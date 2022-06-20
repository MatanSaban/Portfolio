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
            <div className="coverLayer" >
                <div className="coverLayerContent">
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
                                To The Project
                            </a>
                        </div>
                        <p>{props.description}</p>
                </div>
            </div>
        </>
    );
};

export default PortfolioItem;
