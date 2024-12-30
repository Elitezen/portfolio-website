import { forwardRef, RefObject } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

import XIcon from "../../assets/images/icons/x.svg";

const SideNav = forwardRef((_, ref) => {
    const handelSideNavClose = () => {
        if (ref && typeof ref !== 'function' && ref.current) {
            (ref.current as HTMLElement).style.right = "-20em";
        }
    }

    return (
        <nav ref={ref as RefObject<HTMLElement>} className={styles.sideNav}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <button onClick={handelSideNavClose}>
                        <img src={XIcon} alt="Close Side Nav" />
                    </button>
                </div>

                <div className={styles.links}>
                    <ul>
                        <li>
                            <Link to="#">Link Here</Link>
                        </li>

                        <li>
                            <Link to="#">Link Here</Link>
                        </li>

                        <li>
                            <Link to="#">Link Here</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footer}>

                </div>
            </div>
        </nav>
    )
});

export default SideNav;