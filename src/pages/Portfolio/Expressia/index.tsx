import './index.scss';
import SideBar from "../../../components/SideBar";

import ExpressiaAppDirectory from "../../../assets/images/expressia-app-directory.png";
import ExpressiaBotCom from '../../../assets/images/expressia-bot-com.png';
import Showcase1 from "../../../assets/images/expressia_showcase_1.png";
import Showcase2 from "../../../assets/images/expressia_showcase_2.png";
import Showcase3 from "../../../assets/images/expressia_showcase_3.png";
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../components/ScrollToTop';

export default function Expressia() {
    return (
        <>
            <SideBar />
            <main>
                <header>
                    <h1>Expressia Discord App</h1>
                    <h2>
                        Expressia includes an Express API, NodeJS client, and React SPA website.
                    </h2>
                </header>

                <section className="sub-section">
                    <h3>Expressia App Client</h3>

                    <p>
                        Expressia is a public Discord bot in +500 servers totaling ~100,000 users total.
                    </p>

                    <div className="image-row">
                        <figure>
                            <img src={ExpressiaAppDirectory} alt="Expressia page on Discord's app directory" 
                            style={{ maxWidth: '70vw' }}/>
                            
                            <figcaption>
                                Expressia's official <a href="" target="_blank">Discord App Directory Page</a>
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <section className="sub-section">
                    <h3>
                        <a href="https://expressiabot.com" target='_blank'>
                            Expressiabot.com
                        </a>
                    </h3>

                    <p>
                        A React Single Page Application for showcasing Expressia's capabilities.
                    </p>

                    <div className="image-row">
                        <figure>
                            <img src={ExpressiaBotCom} alt="Screen shot of Expressiabot.com" 
                            style={{ maxWidth: '70vw' }}/>

                            <img src={Showcase1} alt="Expressia showcase image" 
                            style={{ maxWidth: '50vw', margin: '1em 0' }}/>

                            <img src={Showcase2} alt="Expressia showcase image" 
                            style={{ maxWidth: '50vw', margin: '1em 0' }}/>

                            <img src={Showcase3} alt="Expressia showcase image" 
                            style={{ maxWidth: '50vw', margin: '1em 0' }}/>
                        </figure>
                    </div>

                    <section>
                        <h3>View Open-Sourced Work</h3>

                        <Link to="../portfolio/open-source" onClick={ScrollToTop}>
                            <button style={{ margin: '2.5em 0' }}>
                                View Expressia
                            </button>
                        </Link>
                    </section>
                </section>
            </main>
        </>
    )
}