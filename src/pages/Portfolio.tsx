import { Link } from 'react-router-dom';

const PORTFOLIO = [
    {id: 'p1', title: 'Portfolio 1'},
    {id: 'p2', title: 'Portfolio 2'},
    {id: 'p3', title: 'Portfolio 3'},
]

function PortfolioPage() {
    return (
        <>
            <h1>The Portfolio Page</h1>
            <ul>
                {PORTFOLIO.map((item) => (
                    <li key={item.id}>
                        <Link to={`${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PortfolioPage;