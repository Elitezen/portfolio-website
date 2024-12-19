import styles from "./index.module.scss";
import type { InnerPageOptions } from "../(typings)/interfaces";

function AboutMe({ visible }: InnerPageOptions) {
    return (
        <section
            style={{
                opacity: `${visible ? 1 : 0}`
            }}
            className={styles.aboutMe}>
            <h1>About Me</h1>
        </section>
    )
}

export default AboutMe;