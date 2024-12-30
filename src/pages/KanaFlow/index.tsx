import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectPage from "../(components)/ProjectPage";
import projectPageStyles from "../(components)/ProjectPage/index.module.scss";
import KanaFlowSite from "../../assets/images/screenshots/kanaflow.png"
import type { Tech } from "../../(typings)/interfaces";

import ReactNativeIcon from "../../assets/images/icons/react-native.svg";
import TypeScriptIcon from "../../assets/images/icons/typescript.svg";
import NodeJsIcon from "../../assets/images/icons/nodejs.svg";
import ReactIcon from "../../assets/images/icons/react.svg";
import SCSSIcon from "../../assets/images/icons/sass.svg";

const techs: Tech[] = [
    { imgSrc: ReactNativeIcon, name: "React Native" },
    { imgSrc: TypeScriptIcon, name: "TypeScript" },
    { imgSrc: NodeJsIcon, name: "Node.js" },
    { imgSrc: ReactIcon, name: "React" },
    { imgSrc: SCSSIcon, name: "SCSS" },
];

function KanaFlow() {
    return (
        <main>
            <Header />
                <ProjectPage>
                    <h1>KanaFlow - From a Personal Learning Tool to a Public iOS App</h1>

                    <img 
                        className={projectPageStyles.coverImage}
                        src={KanaFlowSite} 
                        alt="Scriplty Studios Website" />
                    
                    <section>
                        <h2>About My Project</h2>
                        <p>
                            After a few years of casually studying Japanese, I wanted a quick, easy-to-use app to practice <span>Kana</span>. In just a month, I mastered React Native, built a quiz system, and created a working version. When I shared a preview with a Japanese teacher friend overseas, she was eager to try it and gave positive feedback. Encouraged by others, I rebuilt the app with the goal of publishing it, and on November 12th, 2024, it was accepted into the Apple App Store.
                        </p>
                    
                        <div className={projectPageStyles.details}>
                            <section className={projectPageStyles.detail}>
                                <h3>Roles</h3>
                                <p>App Developer, Front-End Developer</p>
                            </section>

                            <section className={projectPageStyles.detail}>
                                <h3>Launched</h3>
                                <p>November 2024</p>
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
                        <h2>1. App Development</h2>
                        <p>
                            Before creating KanaFlow, I had minimal experience with React Native. This was a build-as-you-learn project, as many other works in development have been for me.
                        </p>
                    
                        <section>
                            <h3>Challenges Faced</h3>

                            <ol className={`${projectPageStyles.list} ${projectPageStyles.cyclicList}`}>
                                <li>
                                    <h4>Generating reasonable question choices</h4>
                                    <p>
                                        While developing a proof-of-concept, I realized the questions were too easy because the incorrect options were often vastly different from the correct one. While this might not be noticeable to a beginner learning Japanese, my familiarity with Kana and focus on memorization made it simple to identify the correct answer by eliminating choices whose character were not in the same column as the target character.
                                    </p>

                                    <h5>Solution</h5>
                                    <p>
                                        I rewrote the character dataset, which initially included only the character and its pronunciation, to incorporate metadata about each character's relationship to others. The updated entries specified the character's variant and column placement. Using this data, I implemented a filtering function that considered the character's variant, column, and the first 1-2 letters of its pronunciation. During question generation, this function ranked characters from most to least similar to the correct answer and picked the top 3. The result was a set of four closely related choices, encouraging users to focus on subtle differences and deepen their familiarity with the characters.
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

export default KanaFlow;