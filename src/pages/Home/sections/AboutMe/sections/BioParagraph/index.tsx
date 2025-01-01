import styles from "./index.module.scss";

import PersonAtComputerIcon from "../../../../../../assets/images/graphics/person_at_computer.svg";

function BioParagraph() {
    return (
        <section className={styles.bioParagraph}>
            <h1>A Little About Me...</h1>

            <div className={styles.paragraphAndGraphic}>
                <div className={styles.paragraph}>
                    <p>Hello, I'm Alejandro, a passionate front-end web developer with back-end and production experience. I started tinkering with web development at the age of 13, and have since been actively learning and pushing my limits when it comes to designing and creating software. Today, I hold a degree in computer science (...)</p>
                </div>

                <div className={styles.graphic}>
                    <img src={PersonAtComputerIcon} alt="Person at Computer" />
                </div>
            </div>
        </section>
    )
}

export default BioParagraph;