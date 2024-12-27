import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Footer() {
    return (
        <footer>
            <div className={styles.content}>
                <h4>Want to join the voyage? Feel free to <Link><span>reach out</span></Link></h4>
            </div>
        </footer>
    )
}

export default Footer;