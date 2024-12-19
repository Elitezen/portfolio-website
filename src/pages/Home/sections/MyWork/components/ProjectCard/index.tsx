import styles from "./index.module.scss";

interface ProjectCardOptions {
    imgSrc: string;
    title: string;
    subTitle: string;
    description: string;
}

function ProjectCard({
    imgSrc, title, subTitle, description
}: ProjectCardOptions) {
    return (
        <article className={styles.projectCard}>
            <div className={styles.content}>
                <div className={styles.imageSide}>
                    <img src={imgSrc} alt="todo" />
                </div>

                <div className={styles.textSide}>
                    <div className={styles.heading}>
                        <h1>{title}</h1>
                        <h2>{subTitle}</h2>
                    </div>

                    <p>{description}</p>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;