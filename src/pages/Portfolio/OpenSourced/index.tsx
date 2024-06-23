import './index.scss';
import SideBar from "../../../components/SideBar";

import StackOverflowPortfolio from "../../../assets/images/stackoverflow-profile.png"

import GitOpenTriviaDb from "../../../assets/images/git_open-trivia-db.png";
import GitDiscordjsChatGpt from "../../../assets/images/git_discordjs-chatgpt.png";
import GitDiscordTrivia from "../../../assets/images/git_discord-trivia.png";

import GitNodeSDK from "../../../assets/images/git_node-sdk.webp";
import GitTextOnGif from "../../../assets/images/git_text-on-gif.webp";
import GitStopDiscordPhising from "../../../assets/images/git_stop-discord-phising.webp";
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../components/ScrollToTop';
import redirect from '../../../util/redirect';

export default function OpenSourced() {
    return (
        <>
            <SideBar />
            <main>
                <header>
                    <h1>Open Sourced Work</h1>
                    <h2>
                        Below are my NodeJS projects, NPM libraries, and contributions to others.
                    </h2>
                </header>

                <section className="sub-section">
                   <h3><a href="https://stackoverflow.com/users/12464931/elitezen" target="_blank">Stack Overflow</a></h3>

                    <figure>
                        <img 
                            src={StackOverflowPortfolio} 
                            alt="Screen Shot of scriptlystudios.com"
                            className='clickable-image'
                            onClick={() => redirect('https://stackoverflow.com/users/12464931/elitezen')}
                            style={{ width: '70vw' }} />
                        
                        <figcaption>
                            <p>
                                I've been answering various Node.JS questions for the past 4 years.
                            </p>
                        </figcaption>
                    </figure>
                </section>

                <section>
                    <h2>Created Projects</h2>

                    <section className='sub-section'>
                        <figure>
                            <img 
                                src={GitOpenTriviaDb} 
                                alt="Github Open Trivia DB display"
                                className='clickable-image'
                                onClick={() => redirect('https://github.com/Elitezen/open-trivia-db-wrapper')} />
                            <figcaption>An API wrapper for OpenTDB with over 50 dependants on GitHub</figcaption>
                        </figure>

                        <figure>
                            <img 
                                src={GitDiscordjsChatGpt} 
                                alt="Github Discord.JS Chat GPT display"
                                className='clickable-image'
                                onClick={() => redirect('https://github.com/Elitezen/discordjs-chatgpt')} />
                            <figcaption>A Discord.JS based plugin for integrating ChatGPT into Discord clients</figcaption>
                        </figure>

                        <figure>
                            <img 
                                src={GitDiscordTrivia} 
                                alt="Github Discord Trivia display"
                                className='clickable-image'
                                onClick={() => redirect('https://github.com/Elitezen/discord-trivia')} />
                            <figcaption>A Discord.JS based library/plugin for creating and managing fully-fledged trivia.</figcaption>
                        </figure>
                    </section>
                </section>

                <section>
                    <h2>Contributions</h2>

                    <section className='sub-section'>
                        <figure>
                            <img 
                                src={GitTextOnGif} 
                                alt="Github text on gif repository display"
                                className='clickable-image'
                                onClick={() => redirect('https://github.com/Elitezen/text-on-gif')} />

                            <figcaption>
                                Reworked majority of the module with quality of life improvements, converted to TypeScript, and complete typings.
                            </figcaption>
                        </figure>

                        <figure>
                            <img 
                                src={GitNodeSDK} 
                                alt="Github top.gg node sdk repository display"
                                className='clickable-image'
                                onClick={() => redirect('https://github.com/Elitezen/node-sdk')} />

                            <figcaption>
                                Contributed improved typings and JSDOC descriptions
                            </figcaption>
                        </figure>

                        <figure>
                            <img 
                                src={GitStopDiscordPhising} 
                                alt="Github stop discord phising repository display"
                                className='clickable-image'
                                onClick={() => redirect('https://github.com/Elitezen/stop-discord-phishing')} />

                            <figcaption>
                                Added typings to the enitre module
                            </figcaption>
                        </figure>
                    </section>

                    <h2>View My Programming Articles</h2>
                    <Link to="../portfolio/extras" onClick={ScrollToTop}>
                        <button style={{ margin: '2.5em 0' }}>
                            View Blogs
                        </button>
                    </Link>
                </section>
            </main>
        </>
    )
}