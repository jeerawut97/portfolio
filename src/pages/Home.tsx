import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/portfolio');
    }

    return (
        <>
            <h1>My Home</h1>
            <p>
                Go to <Link to="portfolio">the list of portfolio</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    )
}

export default HomePage;