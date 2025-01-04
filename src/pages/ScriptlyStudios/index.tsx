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
import LuaIcon from "../../assets/images/icons/lua.svg";
import { Link } from "react-router-dom";

const techs: Tech[] = [
    { imgSrc: ReactIcon, name: "React" },
    { imgSrc: SCSSIcon, name: "SCSS" },
    { imgSrc: NodeJsIcon, name: "Node.js" },
    { imgSrc: TypeScriptIcon, name: "TypeScript" },
    { imgSrc: ExpressIcon, name: "Express" },
    { imgSrc: MongoDBIcon, name: "MongoDB" },
    { imgSrc: LuaIcon, name: "Lua" }
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

                    <Link to="https://scriptlystudios.com" target="_blank" className={projectPageStyles.siteLink}>Visit Live Site</Link>
                    
                    <section>
                        <h2>About My Work</h2>
                        <p>I have provided full-stack development services as a freelancer for Scriptly Studios, a small game studio. My role involves collaborating closely with game developers and community administrators to create and enhance software for both in-game and community-focused features. My three major projects include: designing an API and database for a promotional collaboration event, building the studio's official website, and developing a robust moderation system that supports the management of over 18,000 community members.</p>
                    
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
                        <h2>1. Flag Wars x Freshcut Collaboration Event</h2>
                        <p>In February 2023, Scriptly Studios partnered with the social media platform FreshCut for a promotional event in Flag Wars. I was tasked with creating a system to manage the redemption of 15,000 unique in-game promotional codes. My work included managing and populating a MongoDB database, developing an API for managing code entries, and integrating the API into Flag Wars to handle redemptions. The promotion was a massive success, with my API achieving 100% uptime and error-free performance throughout the event. This led to a 19% increase in the studio's player base.</p>
                    
                        <section>
                            <h3>Accomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Imported 15,000 promotional code vouchers into MongoDB along with fields for metadata.</li>
                                <li>Developed and deployed a secure production API with no errors.</li>
                                <li>Implemented API access into the game to enable users to redeem codes.</li>
                            </ul>
                        </section>
                    </section>

                    <section>
                        <h2>2. Web Development of ScriptlyStudios.com</h2>
                        <p>I designed and developed the official website for Scriptly Studios, showcasing the studio's games and accomplishments. Through effective SEO practices, the website secured top search rankings for "Scriptly Studios." This effort has resulted in hundreds of monthly visitors and a 10% increase in new daily players.</p>
                    
                        <section>
                            <h3>Accomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Designed a stylized webpage fitting for Scriptly Studios' theming and games.</li>
                                <li>Implemented SEO practices to place the webpage at the top of search results for "Scriptly Studios."</li>
                                <li>Boosted search visibility and brand engagement with a captivating design.</li>
                            </ul>
                        </section>
                    </section>

                    <section>
                        <h2>3. Scriptly Studios Community Moderation System</h2>
                        <p>The community Discord server of Scriptly Studios has consistently housed over 18,000 members. I worked closely with the Community Manager to design and plan the feature set of the new moderation client, "Scriptly Bot." This system has supported nearly 2,000 moderation actions in a year, reducing unsafe content in the community by almost 50%.</p>
                    
                        <section>
                            <h3>Accomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Worked alongside the Community Manager to design the new moderation system.</li>
                                <li>Developed and deployed an advanced and versatile moderation system.</li>
                                <li>Enhanced community safety and reduced unsafe content by nearly 50%.</li>
                            </ul>
                        </section>
                    </section>
                </ProjectPage>
            <Footer />
        </main>
    )
}


export default ScriptlyStudios;