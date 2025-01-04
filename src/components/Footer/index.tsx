import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import scrollToTop from "../../(util)/scrollToTop";

function Footer() {
    return (
        <footer>
            <div className={styles.content}>
                <h4>Want to join the voyage? Feel free to <span>reach out</span></h4>

                <Link className={styles.button} to="/contact" onClick={scrollToTop}>
                    Contact Me
                </Link>
            </div>
        </footer>
    )
}

export default Footer;