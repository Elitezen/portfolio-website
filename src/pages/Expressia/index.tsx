import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectPage from "../(components)/ProjectPage";
import projectPageStyles from "../(components)/ProjectPage/index.module.scss";
import ExpressiaGraphic from "../../assets/images/screenshots/expressia.png";
import type { Tech } from "../../(typings)/interfaces";

import TypeScriptIcon from "../../assets/images/icons/typescript.svg";
import NodeJsIcon from "../../assets/images/icons/nodejs.svg";
import ReactIcon from "../../assets/images/icons/react.svg";
import SCSSIcon from "../../assets/images/icons/sass.svg";

const techs: Tech[] = [
    { imgSrc: TypeScriptIcon, name: "TypeScript" },
    { imgSrc: NodeJsIcon, name: "Node.js" },
    { imgSrc: ReactIcon, name: "React" },
    { imgSrc: SCSSIcon, name: "SCSS" },
];

function Expressia() {
    return (
        <main>
            <Header />
                <ProjectPage>
                    <h1>Expressia - An Innovative Discord App for Emojis</h1>

                    <img 
                        className={projectPageStyles.coverImage}
                        src={ExpressiaGraphic} 
                        alt="Scriplty Studios Website" />
                    
                    <section>
                        <h2>About My Project</h2>
                        <p>
                            Expressia is a passion project of mine, it is a Discord app designed for finding new emojis to add to a server. The bot includes a built-in emoji browser, allowing users to browse over 25,000 images through a search engine and category filter. The app is my most popular project, residing in over 800 Discord servers and has surpassed 1,500 server invites over its lifetime, serving a total of 85,000+ satisfied users around the world.
                        </p>
                    
                        <div className={projectPageStyles.details}>
                            <section className={projectPageStyles.detail}>
                                <h3>Roles</h3>
                                <p>Full-Stack Developer</p>
                            </section>

                            <section className={projectPageStyles.detail}>
                                <h3>Launched</h3>
                                <p>October 2023</p>
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
                        <h2>1. Development</h2>
                        <p>
                            Creating Expressia was a journey of challenges. From sourcing assets, developing a built-in browser from using only images and buttons, to getting verification from Discord. To complement Expressia's branding and functionality, I designed and created a React webpage to highlight the app's innovative features. This helped increase traffic to the official Discord App Directory page by 10% and provided users with an informative and visually appealing experience.
                        </p>

                        <section>
                            <h3>Accomplishments</h3>

                            <ul className={projectPageStyles.list}>
                                <li>Created a unique and capable Discord app by utilizing the Discord API with Node.js and TypeScript, providing an innovative way for users to search for emojis unmatched by other services.</li>
                                <li>Designed and created a React webpage to complement my app's theming and highlight its innovative features, helping increase traffic to the official Discord App Directory page by %10.</li>
                                <li>Received verification status by Discord.</li>
                                <li>Surpassed 1,500 server invites, serving 85,000+ users worldwide.</li>
                            </ul>
                        </section>
                    
                        <section>
                            <h3>Challenges Faced</h3>

                            <ol className={`${projectPageStyles.list} ${projectPageStyles.cyclicList}`}>
                                <li>
                                    <h4>Enabling Browsing of 25,000 Assets Within Discord</h4>
                                    <p>
                                        I needed to be able to provide users with an easy way to search for emojis, stickers, and profile pictures. Basic Discord bot browsers use simple pagination to move between 1 element at a time, and more advanced ones either provided a list per page. This would not work for my case, for I needed users to be able to see many images up close and in HD for a proper browsing experience. I did not want to implement a proper webpage, for I believed part of the magic of Expressia would be being able to fully use it all within Discord. 
                                    </p>

                                    <h5>Solution</h5>
                                    <p>
                                        I leveraged the power of node-canvas and Discord bot buttons to create a pseudo-browser. I created a dynamic canvas layout that showed up to 10 emojis per page. Users could use simple navigation buttons to browse emojis 10 at a time, and use number buttons to focus in on one emoji similar to a mouse click. Focusing in on an emoji would create a separate UI that would show a larger image of the emoji with its metadata, as well as buttons to import it.
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


export default Expressia;