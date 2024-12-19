import Header from '../../components/Header';
import SpaceBackground from '../../components/SpaceBackground';
import Hero from './sections/Hero';
import WorkAndAboutMe from './sections/WorkAndAboutMe';

function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <WorkAndAboutMe />
            <SpaceBackground />
        </main>
    )
}

export default Home;