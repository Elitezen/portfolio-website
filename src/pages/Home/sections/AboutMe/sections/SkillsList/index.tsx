import styles from "./index.module.scss";

import Html5Icon from "../../../../../../assets/images/icons/html5.svg";
import Css3Icon from "../../../../../../assets/images/icons/css3.svg";
import SassIcon from "../../../../../../assets/images/icons/sass.svg";
import JavaScriptIcon from "../../../../../../assets/images/icons/javascript.svg";
import TypeScriptIcon from "../../../../../../assets/images/icons/typescript.svg";
import ReactIcon from "../../../../../../assets/images/icons/react.svg";
import ReactNativeIcon from "../../../../../../assets/images/icons/react-native.svg";
import NodeJsIcon from "../../../../../../assets/images/icons/nodejs.svg";
import ExpressIcon from "../../../../../../assets/images/icons/express.svg";
import MongoDbIcon from "../../../../../../assets/images/icons/mongodb.svg";
import GitIcon from "../../../../../../assets/images/icons/git.svg";
import GitHubIcon from "../../../../../../assets/images/icons/github.svg";


interface SkillEntry {
    name: string;
    icon: string;
}

const skills: SkillEntry[] = [
    { name: "HTML5", icon: Html5Icon },
    { name: "CSS3", icon: Css3Icon },
    { name: "SASS", icon: SassIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "Node.js", icon: NodeJsIcon },
    { name: "Express", icon: ExpressIcon },
    { name: "MongoDB", icon: MongoDbIcon },
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GitHubIcon },
];


function SkillsList() {

    return (
        <section className={styles.skillsList}>
            <h1>Skillset</h1>

            <div className={styles.grid}>
                {skills.map((skill) => (
                    <div key={skill.name} className={styles.skillCard}>
                        <img src={skill.icon} alt={`${skill.name} icon`} className={styles.icon} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsList;