import ProjectCard from "../../components/ProjectCard";
import styles from "./index.module.scss";

import KanaFlowCover from "../../../../../../assets/images/covers/kana-flow.png";
import ScriptlyStudiosCover from "../../../../../../assets/images/covers/scriptly-studios.png";
import ExpressiaCover from "../../../../../../assets/images/covers/expressia.png";

function HighlightedProjects() {
    return (
        <section className={styles.highlightedProjects}>
            <h1>Highlighted Projects</h1>

            <div className={styles.projectCards}>
                <ProjectCard 
                    imgSrc={ScriptlyStudiosCover}
                    title="Scriptly Studios"
                    subTitle="Full-Stack Developer | Freelancer"
                    description="Includes multiple projects: Developed the official website, community moderation system, and a promotional voucher code system which successfully served codes to 15,000 users."
                    technologies={[
                        "React", "SCSS", "NodeJS", "TypeScript", "Express API", "MongoDB", "Lua"
                    ]}
                    bulletPoints={[
                        "Designed and developed a dynamic webpage fit to appeal to gamers.",
                        "Built robust moderation tools for a community server with over 18,000 members, contributing to community management and maintaining a safe, organized environment.",
                        "Engineered and deployed a highly reliable promotional code API and database, serving 15,000 players with 100% uptime."
                    ]}
                    link="scriptly-studios"
                    pageURL="https://www.scriptlystudios.com/"/>

                <ProjectCard 
                    imgSrc={KanaFlowCover}
                    title="KanaFlow"
                    subTitle="Front-End Developer | App Developer"
                    description="An IOS mobile app for mastering Japanese Kana memorization for new learners. Complemented by a webpage simple yet sleek webpage."
                    technologies={[
                        "React Native", "TypeScript", "NodeJS", "React", "SCSS"
                    ]}
                    bulletPoints={[
                        "Developed a responsive and clean UI adaptable for phone and tablets.",
                        "Effectively demonstrated the app's featureset in a simple and clean webpage."
                    ]
                    }
                    link="/kanaflow"
                    pageURL="https://www.kanaflowapp.com/"/>

                <ProjectCard 
                    imgSrc={ExpressiaCover}
                    title="Expressia"
                    subTitle="Full-Stack Developer"
                    description="An innovative Discord bot enabling seamless browsing and importing of emojis directly within Discord, complemented by powerful utility features."
                    technologies={[
                        "NodeJS", "TypeScript", "React", "SCSS"
                    ]}
                    bulletPoints={[
                        "Surpassed 1,000 lifetime invites.",
                        "Serving +85,000 users around the world.",
                        "Created a colorful and bubbly webpage to complement the app's theming"
                    ]}
                    link="expressia"
                    pageURL="https://www.expressiabot.com/"/>
            </div>
        </section>
    )
}

export default HighlightedProjects;