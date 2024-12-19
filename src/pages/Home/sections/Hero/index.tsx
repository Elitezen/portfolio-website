import styles from "./index.module.scss";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h3>Greetings!</h3>
                    <h1><span className={styles.strongGlow}>Soy Alejandro</span></h1>
                    <h2>Web Developer</h2>
                </div>

                <div className={styles.descriptionWrapper}>
                    <p>I'm a passionate and enthusiastic <span className={styles.softGlow}>Front-End Web Developer</span>, venturing into the void of software engineering to find my next adventure—or misadventure, depending on how much sleep I got the night before.</p>
                
                    <p className={styles.footer}>↓ Feel free to checkout my journey so far</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;