import './index.scss';
import SideBar from "../../../components/SideBar";

export default function OpenSourced() {
    return (
        <>
            <SideBar />
            <main>
                <header>
                    <h1>Open Sourced Contributions</h1>
                    <h2>
                        Below are my contributions to other NodeJS projects, NPM libraries,
                    </h2>
                </header>

                <section className="sub-section">
                    <h3>open-trivia-db</h3>

                    <p>
                        open-trivia-db is an API wrapper for <a href="">Open Trivia Database</a>
                    </p>
                </section>

                <section className="sub-section">
                    <h3>discord-trivia</h3>

                    <p>
                        discord-trivia, a superset of open-trivia-db, is a <a href="">Discord.JS</a> based SDK for developing
                        complex trivia game systems into Discord Apps
                    </p>
                </section>

                <section className="sub-section">
                    <h3>text-to-gif v3</h3>

                    <p>
                        text-to-gif is an open-sourced library for creating gifs with text applied in NodeJS.
                        I singlehandedly designed and developed the v3 major version update for the library, along with
                        providing typings which were missing in v2.
                    </p>
                </section>

                <section className="sub-section">
                    <h3>Provided typings for stop-discord-phishing</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quae libero et voluptatum ex neque iure provident, possimus impedit facere.
                    </p>
                </section>
            </main>
        </>
    )
}