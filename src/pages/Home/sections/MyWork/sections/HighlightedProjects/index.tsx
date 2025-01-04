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
                    description="I have worked on three projects for Scriptly Studios: Developed the official website, a community moderation system which helps manage +18,000 users, and a promotional voucher code system which successfully served codes to 15,000 gamers!"
                    technologies={[
                        "React", "SCSS", "NodeJS", "TypeScript", "Express API", "MongoDB", "Lua"
                    ]}
                    bulletPoints={[
                        "Mobile responsive React web development.",
                        "Working along side the community manager to design and develop a NodeJS moderation system.",
                        "Engineered and deployed a highly reliable promotional code Express API and MongoDB database, serving 15,000 players with 100% uptime."
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
                        "Developed a responsive and clean app UI adaptable for phone and tablets.",
                        "Effectively demonstrated the app's featureset in a simple and clean webpage.",
                        "Approved by the Apple Appstore (Woohoo! 🎉)"
                    ]
                    }
                    link="/kanaflow"
                    pageURL="https://www.kanaflowapp.com/"/>

                <ProjectCard 
                    imgSrc={ExpressiaCover}
                    title="Expressia"
                    subTitle="Full-Stack Developer"
                    description="A personal passion project. A (humbly) innovative Discord bot enabling seamless browsing and importing of 25,000 assets directly within Discord, complemented by powerful utility features. Oh yeah, and I made a website for it, too."
                    technologies={[
                        "NodeJS", "TypeScript", "React", "SCSS"
                    ]}
                    bulletPoints={[
                        "Surpassed 1,500 lifetime invites.",
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