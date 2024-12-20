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
                    title="KanaFlow"
                    subTitle="Front-End Developer | App Developer"
                    description="A mobile app for practicing Japanese Kana memorization. Complemented by a webpage."
                    bulletPoints={[
                        "Developed a responsive and clean UI for phone and tablets.",
                        "Designed a clean and modern webpage.",
                        "Surpassed ### downloads."
                    ]}/>
            </div>
        </section>
    )
}

export default HighlightedProjects;