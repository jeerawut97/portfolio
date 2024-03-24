'use client'

import { useEffect, useState } from 'react';
import Portfolio from '../components/portfolio/Portfolio'

interface Port {
    id: string;
    title: string;
    url: string
}

async function getPortfolio() {
    const response = await fetch('https://jeerawut.vercel.app/apis/portfolio');
    if (!response.ok) {
        throw new Error('cannot fetch portfolio')
    }
    return response.json()
}

export default function PortfolioPage() {
    const [portfolio, setPortfolio] = useState([]);

    const initPortfolio = async () => {
        try {
            const result = await getPortfolio();
            setPortfolio(result);
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        initPortfolio();
        console.log('use effect');
    }, [])

    const portArray: Port[] = portfolio;
    return <Portfolio list_portfolio={portArray} />;
};
