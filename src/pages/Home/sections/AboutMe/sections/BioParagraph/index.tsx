import styles from "./index.module.scss";

import PersonAtComputerIcon from "../../../../../../assets/images/graphics/person_at_computer.svg";

function BioParagraph() {
    return (
        <section className={styles.bioParagraph}>
            <h1>A Little About Me...</h1>

            <div className={styles.paragraphAndGraphic}>
                <div className={styles.paragraph}>
                    <p>Hello, I'm Alejandro, a passionate front-end web developer with back-end and production experience. I started tinkering with web development at the age of 13, and have since been actively pushing my limits when it comes to designing and creating software. I now proudly hold a degree in computer science, and actively search for new communities to provide my skills to. Creating meaningful software has always been inspiring, seeing my hard work and problem sovling brew into creations others can benefit from or be helped by is something I always strive for.</p>
                </div>

                <div className={styles.graphic}>
                    <img src={PersonAtComputerIcon} alt="Person at Computer" />
                </div>
            </div>
        </section>
    )
}

export default BioParagraph;