import { forwardRef, RefObject } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

import XIcon from "../../assets/images/icons/x.svg";
import resumePDF from "../../assets/pdf/resume_Elitezen_01-03-2025_public.pdf";
import scrollToTop from "../../(util)/scrollToTop";

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
                            <Link to="/" onClick={() => {
                                scrollToTop();
                                handelSideNavClose()
                            }}>Home</Link>
                        </li>

                        <li>
                            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </li>

                        <li>
                            <Link to="/contact" onClick={() => {
                                scrollToTop();
                                handelSideNavClose()
                            }}>Contact</Link>
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