import styles from "./index.module.scss";
import type { InnerPageOptions } from "../(typings)/interfaces";
import BioParagraph from "./sections/BioParagraph";
import SkillsList from "./sections/SkillsList";
import Experience from "./sections/Experience";

function AboutMe({ visible }: InnerPageOptions) {
    return (
        <section
            style={{
                opacity: `${visible ? 1 : 0}`
            }}
            className={styles.aboutMe}>
            <div className={styles.content}>
                <BioParagraph />
                <SkillsList />
                <Experience />
            </div>
        </section>
    )
}

export default AboutMe;