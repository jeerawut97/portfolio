'use client'
import Image from 'next/image'

const img = <Image
                src="/eiei.png"
                alt='me'
                width={0}
                height={0}
                sizes="200vw"
                style={{ width: '100%' }}
                priority
            />

async function HomePage() {
    return (
        <>
            <div>
                <div>{img}</div>
                <div><p>As a developer, I'm Jeerawut Jaidee embarked on a coding journey fueled by an unwavering passion for software development.</p></div>
            </div>
        </>
    )
}

export default HomePage;
