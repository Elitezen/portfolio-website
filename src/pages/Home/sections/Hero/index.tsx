import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import scrollToTop from "../../../../(util)/scrollToTop";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h3>👋🧑🏼‍🚀 Greetings!</h3>
                    <h1><span className={styles.strongGlow}>Soy Alejandro</span></h1>
                </div>

                <div className={styles.descriptionWrapper}>
                    <p>I'm a passionate and enthusiastic <span className={styles.softGlow}>Front-End Web Developer</span>, venturing into the void of software engineering to find my next adventure—or misadventure, depending on how much sleep I got the night before.</p>
                
                    <p className={styles.caption}>Get in touch via my <Link to="/contact" onClick={scrollToTop}>contact form</Link> or email at <a href="mailto:dev.elitezen@gmail.com">dev.elitezen@gmail.com</a></p>
                </div>

                <div className={styles.heroFooter}>
                    <p>Feel free to checkout my journey so far</p>

                    <svg className={styles.arrows}>
                        <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
                        <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
                        <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Hero;