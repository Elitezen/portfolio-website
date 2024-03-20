import styles from "./index.module.scss";

import { Link } from "react-router-dom";
import type { SideBarLinkOptions } from "../../types";

export default function SideBarLink({
    iconPath,
    path,
    tooltip,
    key
}: SideBarLinkOptions & { key: number }) {
    return (
        <li key={key} id={styles["side-bar-link"]}>
            <Link to={path}>
                <figure>
                    <img src={iconPath} alt={tooltip} />
                    <figcaption>{tooltip}</figcaption>
                </figure>
            </Link>
        </li>
    );
}
