import styles from "./index.module.scss";

function Experience() {

    return (
        <section className={styles.experience}>
            <h1>Experience</h1>

            <section className={styles.category}>
                <h2>Education</h2>

                <div className={styles.entry}>
                    <h3>Associates in Computer Science, Hillsborough Community College</h3>
                    <p>August 2022 - July 2024</p>
                </div>
            </section>

            <section className={styles.category}>
                <h2>Work</h2>

                <div className={styles.entry}>
                    <h3>Full-Stack Developer as a freelancer, Scriptly Studios</h3>
                    <p>October 2023 - Present</p>
                </div>

                <div className={styles.entry}>
                    <h3>Sales Floor Associate</h3>
                    <p>November 2021 - Present</p>
                </div>
            </section>
        </section>
    )
}

export default Experience;