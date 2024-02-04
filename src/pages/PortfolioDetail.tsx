import { useParams, Link } from 'react-router-dom';

function PortfolioDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Portfolio Detail</h1>
            <p>{params.portfolioId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    );
}

export default PortfolioDetailPage;