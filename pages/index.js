import Image from 'next/image'
import me from '../public/eiei.png'

function HomePage() {
    return (
        <>
            <div>
                <div>
                    <Image
                        src={me}
                        alt='me'
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
                <div><p>As a developer, I'm Jeerawut Jaidee embarked on a coding journey fueled by an unwavering passion for software development.</p></div>
            </div>
        </>
    )
}

export default HomePage;
