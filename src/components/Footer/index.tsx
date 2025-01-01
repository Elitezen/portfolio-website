import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Footer() {
    return (
        <footer>
            <div className={styles.content}>
                <h4>Want to join the voyage? Feel free to <span>reach out</span></h4>

                <Link className={styles.button} to="contact">
                    Contact Me
                </Link>
            </div>
        </footer>
    )
}

export default Footer;