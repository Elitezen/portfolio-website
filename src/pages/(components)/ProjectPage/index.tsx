import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import type { ReactNode } from "react";
import scrollToTop from "../../../(util)/scrollToTop";

interface ProjectPageOptions {
    children: ReactNode[];
}

function ProjectPage({
    children
}: ProjectPageOptions) {
    return (
        <div className={styles.projectPage}>
            <ReturnLink type="top"/>

            <div className={styles.content}>
                { 
                    ...children
                }

                <ReturnLink type="bottom"/>
            </div>
        </div>
    )
}

const ReturnLink = ({ type }: { type: "top" | "bottom" }) => (
    <Link to="/" className={`${styles.returnLink} ${type == "top" ? styles.top : styles.bottom}`} onClick={scrollToTop}>
        ← Back
    </Link>
)

export default ProjectPage;