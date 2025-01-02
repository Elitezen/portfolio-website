import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import type { ReactNode } from "react";

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
            </div>

            <ReturnLink type="bottom"/>
        </div>
    )
}

const ReturnLink = ({ type }: { type: "top" | "bottom" }) => (
    <Link to="/" className={`${styles.returnLink} ${type == "top" ? styles.top : styles.bottom}`}>
        ← Back
    </Link>
)

export default ProjectPage;