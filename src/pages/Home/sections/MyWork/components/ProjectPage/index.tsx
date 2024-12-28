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
            <div className={styles.content}>
                { 
                    ...children
                }
            </div>
        </div>
    )
}

export default ProjectPage;