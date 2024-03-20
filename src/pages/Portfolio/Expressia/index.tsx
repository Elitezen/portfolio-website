import "./index.scss";
import SideBar from "../../../components/SideBar";

import ExpressiaAppDirectory from "../../../assets/images/expressia-app-directory.png";
import ExpressiaBotCom from "../../../assets/images/expressia-bot-com.png";

export default function Expressia() {
    return (
        <>
            <SideBar />
            <main>
                <header>
                    <h1>Expressia Discord App</h1>
                    <h2>
                        Expressia includes an Express API, NodeJS client, and
                        React SPA website.
                    </h2>
                </header>

                <section className="sub-section">
                    <h3>Expressia App Client</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus similique quidem quia, temporibus fuga veritatis
                        earum ut sit officia odio beatae nulla distinctio
                        deleniti, minima voluptate perferendis quod? Corrupti,
                        nihil.
                    </p>

                    <div className="image-row">
                        <figure>
                            <img
                                src={ExpressiaAppDirectory}
                                alt="Expressia page on Discord's app directory"
                                style={{ maxWidth: "70vw" }}
                            />

                            <figcaption>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Reprehenderit, molestias.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <section className="sub-section">
                    <h3>
                        <a href="https://expressiabot.com" target="_blank">
                            Expressiabot.com
                        </a>
                    </h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus similique quidem quia, temporibus fuga veritatis
                        earum ut sit officia odio beatae nulla distinctio
                        deleniti, minima voluptate perferendis quod? Corrupti,
                        nihil.
                    </p>

                    <div className="image-row">
                        <figure>
                            <img
                                src={ExpressiaBotCom}
                                alt="Screen shot of Expressiabot.com"
                                style={{ maxWidth: "70vw" }}
                            />

                            <figcaption>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Reprehenderit, molestias.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            </main>
        </>
    );
}
