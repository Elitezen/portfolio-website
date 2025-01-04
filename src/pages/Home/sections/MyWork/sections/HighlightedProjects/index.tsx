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
                    subTitle="Web, API, and Database Developer"
                    description="I have worked on three projects for Scriptly Studios: Developed the official website, a community moderation system which helps manage +18,000 users, and a promotional voucher code system which successfully served codes to 15,000 gamers!"
                    technologies={[
                        "React", "SCSS", "NodeJS", "TypeScript", "Express API", "MongoDB", "Lua"
                    ]}
                    bulletPoints={[
                        "Developed an Express API with 100% uptime, handling 15,000+ promo code redemptions, boosting the studio's player base by 19%.",
                        "Built a React website that increased search visibility for Scriptly Studios, leading to a 10% rise in new daily players and hundreds of monthly visitors.",
                        "Designed a Node.js and MongoDB moderation system for 18,000+ members, reducing unsafe content by nearly 50% with 2,000 actions in a year."
                    ]}
                    link="scriptly-studios"
                    pageURL="https://www.scriptlystudios.com/"/>

                <ProjectCard 
                    imgSrc={KanaFlowCover}
                    title="KanaFlow"
                    subTitle="Web + App Design and Developer"
                    description="An IOS mobile app for mastering Japanese Kana memorization for new learners. Complemented by a webpage simple yet sleek webpage."
                    technologies={[
                        "React Native", "TypeScript", "NodeJS", "React", "SCSS"
                    ]}
                    bulletPoints={[
                        "Developed a sleek React Native app adaptable to all devices, increasing non-iPhone downloads by 38%.",
                        "Created a React webpage highlighting app features, generating 30+ additional impressions monthly.",
                        "Published a currently 5-star Japanese learning app on the Apple App Store, delivering a smooth user experience."
                    ]
                    }
                    link="/kanaflow"
                    pageURL="https://www.kanaflowapp.com/"/>

                <ProjectCard 
                    imgSrc={ExpressiaCover}
                    title="Expressia"
                    subTitle="Web and Discord Bot Developer"
                    description="A personal passion project. A (humbly) innovative Discord bot enabling seamless browsing and importing of 25,000 assets directly within Discord, complemented by powerful utility features. Oh yeah, and I made a website for it, too."
                    technologies={[
                        "NodeJS", "TypeScript", "React", "SCSS"
                    ]}
                    bulletPoints={[
                        "Built a Node.js and TypeScript app using the Discord API, offering unique emoji search capabilities.",
                        "Achieved 1,500+ server invites and served 85,000+ users worldwide.",
                        "Designed a React site to showcase app features, boosting traffic to the Discord App Directory by 10%."
                    ]}
                    link="expressia"
                    pageURL="https://www.expressiabot.com/"/>
            </div>
        </section>
    )
}

export default HighlightedProjects;