import './index.scss';

import SideBar from '../../../components/SideBar';
import CodesAPICode from '../../../assets/images/codes-api-code-sample.png';
import CodesAPIFlowChart from '../../../assets/images/codes-api-flowchart.png';
import ScriptlyStudiosCom from '../../../assets/images/scriptly-studios-com.png';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../../components/ScrollToTop';

// import CodesAPITraffic from '../../assets/images/codes-api-traffic.webp';

export default function ScriptlyStudios() {
    return (
        <>
            <SideBar />
            <main>
                <header>
                    <h1>Contributer at Scriptly Studios</h1>
                    <h2>
                        I have contributed as the Community Developer 
                        for <a href="https://scriptlystudios.com" target="_blank"> Scriptly Studios</a> since 2023.
                        My duties including managing the community database, moderation system, and moderation 
                        client. Additionallly, I developed and deployed a promotional codes API and database system
                        for a game's collaboration with the Fresh Cut platform.
                    </h2>
                </header>

                <section className="sub-section">
                    <h3>Promo. Codes System</h3>

                    <p>
                        I designed, developed, and managed a promotional codes system for a collaboration event 
                        between <a href="https://www.roblox.com/games/3214114884/Flag-Wars">Flag Wars</a> and <a href="https://freshcut.gg/home">Fresh Cut</a>. The system involved the game's
                        client communicating with my API, which performed read/write operations on a MongoDB database I
                        managed. The system was a success, having 0 errors in production and maintaining an fast response time throughout it's peak traffic.
                    </p>

                    <div className="image-row">
                        <figure>
                            <img src={CodesAPICode} alt="Screen shot of a sample of code" />
                            
                            <figcaption>
                                <p>
                                    Sample code of processing promo code redeem requests.
                                </p>
                            </figcaption>
                        </figure>

                        <figure>
                            <img src={CodesAPIFlowChart} alt="Flowchart of the codes API process" />
                            
                            <figcaption>
                                <p>
                                    Flow chart of promo code redemption process.
                                </p>
                            </figcaption>
                        </figure>
                    </div>

                    <figure>
                        <iframe id="iframe" src="https://www.youtube.com/embed/FOibRaB26gY" title="How to get the FREE UGC HEADPHONES in Roblox FLAG WARS" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                        <figcaption>Community Youtube video demonstrating code redemption in Flag Wars at 5:30</figcaption>
                    </figure>
                </section>

                <section className="sub-section">
                    <h3>Moderation System Client "Scriptly Bot"</h3>

                    <p>
                        Scriptly Bot is a state-of-the-art community moderation client, going above and beyond 
                         public bots to serve the specific needs and wants of the Scriptly moderation team. This client
                          system includes a Discord Bot, MongoDB database, Digital Ocean Linux Droplet and File storage system.
                    </p>

                    
                </section>

                <section className="sub-section">
                    <h3>
                        <a href="https://scriptlystudios.com" target='_blank'>
                            ScriptlyStudios.com
                        </a>
                    </h3>

                    <p>
                        A VueJS Single Page Application website as the official website for Scriptly Studios.
                    </p>

                    <div className="image-row">
                        <figure>
                            <img src={ScriptlyStudiosCom} alt="Screen Shot of scriptlystudios.com" />

                        </figure>
                    </div>
                </section>

                <section>
                    <h3>View My Personal Discord Client Expressia</h3>

                    <Link to="../portfolio/expressia" onClick={ScrollToTop}>
                        <button style={{ margin: '2.5em 0' }}>
                            View Expressia
                        </button>
                    </Link>
                </section>
            </main>
        </>
    )
}