import styles from "./index.module.scss";

import RightArrowIcon from "../../../../../../assets/images/icons/arrow-right.svg";
import OpenLinkIcon from "../../../../../../assets/images/icons/open-link.svg";
import { Link } from "react-router-dom";

interface ProjectCardOptions {
    imgSrc: string;
    title: string;
    subTitle: string;
    description: string;
    bulletPoints: [string, string] | [string, string, string];
    technologies: string[];
    link: string;
    pageURL: string;
}

function ProjectCard({
    imgSrc, title, subTitle, description, bulletPoints, technologies, link, pageURL
}: ProjectCardOptions) {
    return (
        <article className={styles.projectCard}>
            <div className={styles.content}>
                <div className={styles.imageSide}>
                    <img src={imgSrc} alt="todo" />
                </div>

                <div className={styles.textSide}>
                    <div className={styles.textContainer}>
                        <div className={styles.heading}>
                            <h3>{subTitle}</h3>
                            <h2>{title}</h2>      
                        </div>

                        <p className={styles.description}>{description}</p>

                        <ul className={styles.technologies}>
                            {
                                technologies.map(tech => (
                                    <li>{tech}</li>
                                ))
                            }
                        </ul>

                        <ul className={styles.bullets}>
                            {
                                bulletPoints.map(str => (
                                    <li>
                                        <p>{str}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={styles.buttonRow}>
                        <Link to={link}>
                            <p>Read More</p>
                            <img src={RightArrowIcon} alt="Right Arrow" />
                        </Link>

                        <a href={pageURL} target="_blank">
                            <p>Live Site</p>
                            <img src={OpenLinkIcon} alt="Open Link" />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard;