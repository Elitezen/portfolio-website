import styles from "../Experience/index.module.scss";

function Certifications() {

    return (
        <section className={styles.experience}>
            <h1>Certifications</h1>

            <section className={styles.category}>
                <h2>Certiport</h2>

                <div className={styles.entry}>
                    <h3>Microsoft Technology Associate:</h3>
                    <p>Introduction to Programming using JavaScript (cert. id yrwC-uTYe)</p>
                </div>

                <div className={styles.entry}>
                    <h3>Microsoft Technology Associate:</h3>
                    <p>Introduction to Programming using HTML and CSS (cert. id RCqn-4Tpz)</p>
                </div>
            </section>
        </section>
    )
}

export default Certifications;