import ProjectCard from "../../components/ProjectCard";
import styles from "./index.module.scss";

import KanaFlowCover from "../../../../../../assets/images/covers/kana-flow.png";
import ScriptlyStudiosCover from "../../../../../../assets/images/covers/scriptly-studios.png";

function HighlightedProjects() {
    return (
        <section className={styles.highlightedProjects}>
            <h1>Highlighted Projects</h1>

            <div className={styles.projectCards}>
                <ProjectCard 
                    imgSrc={ScriptlyStudiosCover}
                    title="Scriptly Studios"
                    subTitle="Full-Stack Developer | Freelancer"
                    description="Developed the official website, moderation system, and a promotional code system which successfully served 15,000 codes"
                    technologies={[
                        "React", "SCSS", "NodeJS", "TypeScript", "Express API", "MongoDB", "Lua"
                    ]}
                    bulletPoints={[
                        "Designed and developed a webpage visited by hundreds.",
                        "Produced tools used to moderate a Discord server of 18,000 users.",
                        "Developed and deployed a promotional code API and database that served 15,000 players with a %100 uptime."
                    ]}
                    link="scriptly-studios"/>

                <ProjectCard 
                    imgSrc={KanaFlowCover}
                    title="KanaFlow"
                    subTitle="Front-End Developer | App Developer"
                    description="A mobile app for practicing Japanese Kana memorization. Complemented by a webpage."
                    technologies={[
                        "React Native", "TypeScript", "NodeJS", "React", "SCSS"
                    ]}
                    bulletPoints={[
                        "Developed a responsive and clean UI for phone and tablets.",
                        "Designed a clean and modern webpage.",
                        "Surpassed ### downloads."
                    ]
                    }
                    link="/kanaflow"/>

                <ProjectCard 
                    imgSrc={KanaFlowCover}
                    title="Expressia"
                    subTitle="Full-Stack Developer"
                    description="An innovative Discord bot for browsing and importing emojis within Discord."
                    technologies={[
                        "NodeJS", "TypeScript", "React", "SCSS"
                    ]}
                    bulletPoints={[
                        "Reached XXXX server invites",
                        "Serving XXXXXX users"
                    ]}
                    link="expressia"/>
            </div>
        </section>
    )
}

export default HighlightedProjects;