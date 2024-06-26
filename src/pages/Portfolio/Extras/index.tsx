import './index.scss';
import SideBar from "../../../components/SideBar";

export default function Extras() {
    return (
        <>
            <SideBar />
            <main>
                <header>
                    <h1>Blogs</h1>
                    <h2>
                        I've written various Node.JS programming articles on <a href="https://dev.to/elitezen" target="_blank">dev.to/elitezen</a>
                    </h2>
                </header>

                <section className='sub-section'>
                    <h3>
                        <a href="https://dev.to/elitezen/use-the-dev-api-with-this-nodejs-package-2ij">Use The DEV API With This NodeJS Package</a>
                    </h3>

                    <p>
                        A guide of using my library for interacting with the official dev.to API.
                    </p>

                    <h3>
                        <a href="https://dev.to/elitezen/how-to-setup-a-complete-discordjs-template-through-the-command-line-48pp">How to Setup a Complete Discord.JS Template Through the Command Line</a>
                    </h3>

                    <p>
                        A guide for setting up a boilerplate for Discord.JS APP through a command line library. Boilerplate and CLI library developed by me.
                    </p>

                    <h3>
                        <a href="https://dev.to/elitezen/retrieve-trivia-questions-with-easy-trivia-4nog">Retrieve Trivia Questions With open-trivia-db
                        </a>
                    </h3>

                    <p>
                        A guide for setting up a boilerplate for Discord.JS APP through a command line library. Boilerplate and CLI library developed by me.
                    </p>

                    <h3>
                        <a href="https://dev.to/elitezen/code-fully-fledged-trivia-games-in-discordjs-ge8">Code Fully Fledged Trivia Games in Discord.JS</a>
                    </h3>

                    <p>
                        A guide for using a plugin for trivia games through Discord apps.
                    </p>
                </section>
            </main>
        </>
    )
}