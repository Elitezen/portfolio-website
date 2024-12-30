import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectPage from "../(components)/ProjectPage";
import projectPageStyles from "../(components)/ProjectPage/index.module.scss";
import ScriptlyStudiosSite from "../../assets/images/screenshots/scriptly-studios.png"
import type { Tech } from "../../(typings)/interfaces";

import ReactIcon from "../../assets/images/icons/react.svg";
import SCSSIcon from "../../assets/images/icons/sass.svg";
import NodeJsIcon from "../../assets/images/icons/nodejs.svg";
import TypeScriptIcon from "../../assets/images/icons/typescript.svg";
import ExpressIcon from "../../assets/images/icons/express.svg";
import MongoDBIcon from "../../assets/images/icons/mongodb.svg";

const techs: Tech[] = [
    { imgSrc: ReactIcon, name: "React" },
    { imgSrc: SCSSIcon, name: "SCSS" },
    { imgSrc: NodeJsIcon, name: "Node.js" },
    { imgSrc: TypeScriptIcon, name: "TypeScript" },
    { imgSrc: ExpressIcon, name: "Express" },
    { imgSrc: MongoDBIcon, name: "MongoDB" },
];


function ScriptlyStudios() {
    return (
        <main>
            <Header />
                <ProjectPage>
                    <h1>Scriptly Studios - Designer, Web, and API Developer</h1>

                    <img 
                        className={projectPageStyles.coverImage}
                        src={ScriptlyStudiosSite} 
                        alt="Scriplty Studios Website" />
                    
                    <section>
                        <h2>About My Work</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere placeat iure quisquam dolorum. Expedita repellat, cumque, dolorum obcaecati aliquid iure fuga incidunt quasi cupiditate distinctio tempora eum porro iste hic.</p>
                    
                        <div className={projectPageStyles.details}>
                            <section className={projectPageStyles.detail}>
                                <h3>Roles</h3>
                                <p>Web Developer, API Developer</p>
                            </section>

                            <section className={projectPageStyles.detail}>
                                <h3>Timeline</h3>
                                <p>October 2023 - Present</p>
                            </section>

                            <section className={projectPageStyles.detail}>
                                <h3>Tech Stack</h3>
                                
                                <ul className={projectPageStyles.techStack}>
                                    {
                                        techs.map(tech => (
                                            <li>
                                                <img src={tech.imgSrc} alt={`${tech.name} icon`} />
                                                <p>{tech.name}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </section>
                        </div>
                    </section>

                    <section>
                        <h2>1. Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id accusamus alias sapiente vero blanditiis quos minus doloribus velit ipsa deserunt, sed earum omnis a officiis dicta ducimus. Tempora, ratione praesentium.</p>
                    
                        <section>
                            <h3>Acomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Designed a sleek webpage</li>
                                <li>Established the studios' first official website which frequently appears as the first result for Google searches</li>
                            </ul>
                        </section>
                    </section>

                    <section>
                        <h2>2. Flag Wars x FreshCut Promotional Codes Database and API</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id accusamus alias sapiente vero blanditiis quos minus doloribus velit ipsa deserunt, sed earum omnis a officiis dicta ducimus. Tempora, ratione praesentium.</p>
                    
                        <section>
                            <h3>Acomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Effectively coordinated with Flag Wars game and FreshCut app developers to design a promotional code redeeming system</li>
                                <li>Developed an Express API to manage the reading and redeeming of the promo codes database</li>
                                <li>Deployed the API and served 15,000 code redemptions with %100 uptime and 0 production errors</li>
                            </ul>
                        </section>
                    </section>

                    <section>
                        <h2>3. Community Server Moderation System</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id accusamus alias sapiente vero blanditiis quos minus doloribus velit ipsa deserunt, sed earum omnis a officiis dicta ducimus. Tempora, ratione praesentium.</p>
                    
                        <section>
                            <h3>Acomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Worked alongside the community manager to plan and design moderator tools to address ongoing needs for community safety</li>
                                <li>Developed and deployed a Discord app for moderators to carry out moderation for +18,000 server members</li>
                            </ul>
                        </section>
                    </section>
                </ProjectPage>
            <Footer />
        </main>
    )
}

export default ScriptlyStudios;