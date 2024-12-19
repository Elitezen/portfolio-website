import styles from "./index.module.scss";
import type { InnerPageOptions } from "../(typings)/interfaces";
import HighlightedProjects from "./sections/HighlightedProjects";

function MyWork({ visible }: InnerPageOptions) {
    return (
        <section
            style={{
                opacity: `${visible ? 1 : 0}`
            }}
            className={styles.myWork}>
            <div className={styles.content}>
                <HighlightedProjects />
            </div>
        </section>
    )
}

export default MyWork;