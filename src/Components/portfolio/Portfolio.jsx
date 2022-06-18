import './portfolio.css'
import IMG from '../../assets/profileimage.jpg'
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    return ( 
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <PortfolioItem imageSrc={IMG} title={'This is a portfolio item title'} github={'https://github.com/matansaban'} liveDemo={'https://github.com'}/>
                <PortfolioItem imageSrc={IMG} title={'This is a portfolio item title'} github={'https://github.com/matansaban'} liveDemo={'https://github.com'}/>
                <PortfolioItem imageSrc={IMG} title={'This is a portfolio item title'} github={'https://github.com/matansaban'} liveDemo={'https://github.com'}/>
                <PortfolioItem imageSrc={IMG} title={'This is a portfolio item title'} github={'https://github.com/matansaban'} liveDemo={'https://github.com'}/>
                <PortfolioItem imageSrc={IMG} title={'This is a portfolio item title'} github={'https://github.com/matansaban'} liveDemo={'https://github.com'}/>
                <PortfolioItem imageSrc={IMG} title={'This is a portfolio item title'} github={'https://github.com/matansaban'} liveDemo={'https://github.com'}/>
            </div>
        </section>
     );
}
 
export default Portfolio;