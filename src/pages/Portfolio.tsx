import img from '../assets/vite.svg';

const PORTFOLIO = [
    {id: 'p1', title: 'Portfolio 1'},
    {id: 'p2', title: 'Portfolio 2'},
    {id: 'p3', title: 'Portfolio 3'},
    {id: 'p4', title: 'Portfolio 4'},
    {id: 'p5', title: 'Portfolio 5'},
    {id: 'p6', title: 'Portfolio 6'},
    {id: 'p7', title: 'Portfolio 7'},
    {id: 'p8', title: 'Portfolio 8'},
    {id: 'p9', title: 'Portfolio 9'},
]

function PortfolioPage() {
    return (
        <>
            <section className="portfolio-category">
            <ul className="portfolio">
                {PORTFOLIO.map((portfolio) => (
                    <li key={portfolio.id} className="portfolio-item">
                    <button>
                        <img src={img} />
                        <h3>{portfolio.title}</h3>
                    </button>
                    </li>
                ))}
            </ul>
            </section>
        </>
    );
}

export default PortfolioPage;