import { Link } from "react-router-dom";
import img from '../assets/portfolio_2.png';

const PORTFOLIO = [
    {id: 'p1', title: 'dice-game', url: 'https://jeerawut97.github.io/dice-game.github.io/'},
    {id: 'p2', title: 'drum-kit', url: 'https://jeerawut97.github.io/drum-kit.github.io/'},
    {id: 'p3', title: 'react-essentials', url: 'https://jeerawut97.github.io/react-essentials/'},
    {id: 'p4', title: 'react-tic-tac-toe', url: 'https://jeerawut97.github.io/react-tic-tac-toe/'},
    {id: 'p5', title: 'react-investment', url: 'https://jeerawut97.github.io/react-investment/'},
    {id: 'p6', title: 'react-final-countdown', url: 'https://jeerawut97.github.io/react-the-almost-final-countdown/'},
    {id: 'p7', title: 'react-project-management', url: 'https://jeerawut97.github.io/react-project-management/'},
    {id: 'p8', title: 'react-place-picker', url: 'https://jeerawut97.github.io/react-place-picker/'},
    {id: 'p9', title: 'react-quiz', url: 'https://jeerawut97.github.io/react-quiz/'},
    {id: 'p10', title: 'react-elegant-context', url: 'https://jeerawut97.github.io/react-elegant-context/'},
    {id: 'p11', title: 'react-forms', url: 'https://jeerawut97.github.io/react-forms/'},
    {id: 'p12', title: 'react-redux-cart', url: 'https://jeerawut97.github.io/react-redux-cart/'}
]

function PortfolioPage() {
    return (
        <>
            <section>
            <ul className="portfolio">
                {PORTFOLIO.map((portfolio) => (
                    <li key={portfolio.id} className="portfolio-item">
                    
                        <button>
                        <Link to={portfolio.url} target="_blank" rel="noopener noreferrer">
                            <img src={img} />
                            <h3>{portfolio.title}</h3>
                        </Link>
                        </button>
                    
                    </li>
                )).reverse()}
            </ul>
            </section>
        </>
    );
}

export default PortfolioPage;