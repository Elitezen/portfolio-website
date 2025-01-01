import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectPage from "../(components)/ProjectPage";
import projectPageStyles from "../(components)/ProjectPage/index.module.scss";
import KanaFlowSite from "../../assets/images/screenshots/kanaflow.png"
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
                        src={KanaFlowSite} 
                        alt="Scriplty Studios Website" />
                    
                    <section>
                        <h2>About My Project</h2>
                        <p>
                            Expressia is a passion project of mine, it is a Discord app designed for finding new emojis to add to a server. The bot includes a built-in emoji browser, allowing users to browse over 25,000 images through a search engine and category filter. The app is my most popular project, residing in over 800 Discord servers.
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
                </ProjectPage>
            <Footer />
        </main>
    )
}

export default Expressia;