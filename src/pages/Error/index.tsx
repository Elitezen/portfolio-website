import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./index.module.scss";

function Error() {
    return (
        <main className={styles.error}>
            <Header />

            <div className={styles.content}>
                404
                <Link to="/">Return Home</Link>
            </div>

            <Footer />
        </main>
    )
}

export default Error;