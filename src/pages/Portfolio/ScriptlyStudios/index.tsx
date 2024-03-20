import './index.scss';

import SideBar from '../../../components/SideBar';
import CodesAPICode from '../../../assets/images/codes-api-code-sample.png';
import CodesAPIFlowChart from '../../../assets/images/codes-api-flowchart.png';
import ScriptlyStudiosCom from '../../../assets/images/scriptly-studios-com.png';

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
                        managed. The system was a success, having 0 errors in production and maintaining an
                    </p>

                    <div className="image-row">
                        <figure>
                            <img src={CodesAPICode} alt="Screen shot of a sample of code" />
                            
                            <figcaption>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias.
                                </p>
                            </figcaption>
                        </figure>

                        <figure>
                            <img src={CodesAPIFlowChart} alt="Flowchart of the codes API process" />
                            
                            <figcaption>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <section className="sub-section">
                    <h3>Moderation System Client "Scriptly Bot"</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique quidem quia, temporibus fuga veritatis earum ut sit officia odio beatae nulla distinctio deleniti, minima voluptate perferendis quod? Corrupti, nihil.
                    </p>

                    
                </section>

                <section className="sub-section">
                    <h3>
                        <a href="https://scriptlystudios.com" target='_blank'>
                            ScriptlyStudios.com
                        </a>
                    </h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique quidem quia, temporibus fuga veritatis earum ut sit officia odio beatae nulla distinctio deleniti, minima voluptate perferendis quod? Corrupti, nihil.
                    </p>

                    <div className="image-row">
                        <figure>
                            <img src={ScriptlyStudiosCom} alt="Screen Shot of scriptlystudios.com" />
                            
                            <figcaption>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </main>
        </>
    )
}