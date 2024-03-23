import Link from 'next/link';
import Image from 'next/image';
import logoPort from '/public/portfolio_2.png';


interface PortfolioItem {
    id: string;
    title: string;
    url: string;
}

async function PortfolioPage({ list_portfolio }: { list_portfolio: PortfolioItem[] }) {
    return (
        <>
            <section>
            <ul className="portfolio">
                {list_portfolio.map((portfolio) => (
                    <li key={portfolio.id} className="portfolio-item">
                        <button>
                            <h3>{portfolio.title}</h3>
                            <Link href={portfolio.url} rel="noopener noreferrer" target="_blank">
                                <Image 
                                    src={logoPort}
                                    alt='logo-port2'
                                    priority
                                />
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