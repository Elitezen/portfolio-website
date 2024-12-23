import ProjectCard from "../../components/ProjectCard";
import styles from "./index.module.scss";

import KanaFlowCover from "../../../../../../assets/images/covers/kana-flow.png";

function HighlightedProjects() {
    return (
        <section className={styles.highlightedProjects}>
            <h1>Highlighted Projects</h1>

            <div className={styles.projectCards}>
                <ProjectCard 
                    imgSrc={KanaFlowCover}
                    title="KanaFlow"
                    subTitle="Front-End Developer | App Developer"
                    description="A mobile app for practicing Japanese Kana memorization. Complemented by a webpage."
                    bulletPoints={[
                        "Developed a responsive and clean UI for phone and tablets.",
                        "Designed a clean and modern webpage.",
                        "Surpassed ### downloads."
                    ]}/>

                <ProjectCard 
                    imgSrc={KanaFlowCover}
                    title="Scriptly Studios"
                    subTitle="Full-Stack Developer | Freelancer"
                    description="Developed the official website, moderation system, and a promotional code system which successfully served 15,000 codes"
                    bulletPoints={[
                        "Designed and developed a webpage visited by hundreds.",
                        "Produced tools used to moderate a Discord server of 18,000 users.",
                        "Developed and deployed a promotional code API and database that served 15,000 players with a %100 uptime."
                    ]}/>

                <ProjectCard 
                    imgSrc={KanaFlowCover}
                    title="Expressia"
                    subTitle="Full-Stack Developer"
                    description="A mobile app for practicing Japanese Kana memorization. Complemented by a webpage."
                    bulletPoints={[
                        "Reached XXXX server invites",
                        "Serving XXXXXX users"
                    ]}/>
            </div>
        </section>
    )
}

export default HighlightedProjects;