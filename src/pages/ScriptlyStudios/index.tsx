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
                        <p>In February 2023, Scriptly Studios partnered with the social media platform FreshCut for a promotional event in Flag Wars. I was tasked with creating a system to manage the redemption of 15,000 unique in-game promotional codes. My work included managing and populating a MongoDB database, developing an API for managing code entries, and integrating the API into Flag Wars to handle redemptions. The promotion was a massive success, with my API achieving 100% uptime and error-free performance throughout the event.</p>
                    
                        <section>
                            <h3>Acomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Imported 15,000 promotional code vouchers into MongoDB along with fields for metadata.</li>
                                <li>Developed and deployed a secure production API with no errors.</li>
                                <li>Implemented API access into the game to enable users to redeem codes.</li>
                            </ul>
                        </section>

                        <section>
                            <h3>Challenges Faced</h3>

                            <ol className={`${projectPageStyles.list} ${projectPageStyles.cyclicList}`}>
                                <li>
                                    <h4>Preventing Double Redemptions of the Same Code</h4>
                                    <p>
                                        During testing of the redemption API, I realized that the same code could be redeemed twice by 2 different requests if they were sent by less than 100 milliseconds apart. Each promotional code was unique and only 1 player would be allowed one code redemption. 
                                    </p>

                                    <h5>Solution</h5>
                                    <p>
                                    This project was my first experience developing a production API. I collaborated with Scriptly Studios' developers and FreshCut's management to meet their requirements. The high stakes of delivering a reliable system for tens of thousands of players fostered strong self-discipline. I gained skills in API security (IP whitelisting, rate limiting, secret keys), error handling, and ensuring proper responses for all requests.
                                    </p>
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h3>What I Learned</h3>

                            <p>
                                This project marked my first experience developing an API for production. I collaborated closely with Scriptly Studios' developers and FreshCut's management to align with both parties' requirements. The pressure of delivering a reliable system for tens of thousands of players instilled strong self-discipline throughout the design and development process. I gained valuable skills, including securing an API through IP whitelisting, rate limiting, and secret keys, as well as handling all potential errors and ensuring appropriate responses to every request, regardless of the outcome.
                            </p>
                        </section>
                    </section>

                    <section>
                        <h2>2. Web Development of ScriptlyStudios.com</h2>
                        <p>
                            I designed and developed the offical website for Scriptly Studios and effectively showcased the studio's games and accomplishments.
                        </p>
                    
                        <section>
                            <h3>Acomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Desgined a stylized webpage fitting for Scriptly Studios' theming and games.</li>
                                <li>Implemented SEO practices to place the webpage at the top of search results for "Scriptly Studios."</li>
                            </ul>
                        </section>
                    </section>

                    <section>
                        <h2>3. Scriptly Studios Community Moderation System</h2>
                        <p>
                            The community Discord server of Scriptly Studios has consistently housed over 18,000 members. The Community Manager tasked me with creating the successor to a moderation system app used by the moderators daily. I worked closley with the manager to design and plan out the feature set of the new moderation client "Scriptly Bot." Throughout the span of over the year, the client would undergo 3 major versions, with each new rework improving in feature-set, performance, and code quality. Today, thousands of moderation actions have been carried out by the staff team, effectively maintaining the safety of the Discord server.
                        </p>
                    
                        <section>
                            <h3>Acomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Worked alongside the Community Manager to design the new moderation system.</li>
                                <li>Developed and deployed an advanced and versitile moderation system</li>
                            </ul>
                        </section>

                        <section>
                            <h3>Challenges Faced</h3>

                            <ol className={`${projectPageStyles.list} ${projectPageStyles.cyclicList}`}>
                                <li>
                                    <h4>Maintaining a Rapidly Growing and Complex Codebase</h4>
                                    <p>
                                    The Scriptly Bot codebase is among the largest I have ever managed. While I initially developed the first two versions, the community manager's growing requests for new features, command overhauls, and entirely new systems gradually expanded the codebase in an unstructured way. Over time, the lack of organization made it increasingly difficult to navigate, eventually hindering my ability to focus on programming as I struggled to decipher my own code.
                                    </p>

                                    <h5>Solution</h5>
                                    <p>
                                    The two major updates to the codebase involved extensive refactoring, creating reusable components and functions, and restructuring database schemas to accommodate new requirements. Alongside these refactors, I researched best practices for organizing the directory structure, aiming to design a layout that was logical, easy to navigate, and streamlined for future development.
                                    </p>
                                </li>
                            </ol>
                        </section>
                    </section>
                </ProjectPage>
            <Footer />
        </main>
    )
}

export default ScriptlyStudios;