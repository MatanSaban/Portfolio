const PortfolioItem = (props) => {
    return (
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={props.imageSrc} alt="" />
            </div>
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
        </article>
    );
};

export default PortfolioItem;
