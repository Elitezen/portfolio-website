import styles from "./index.module.scss";

import ElitezenIcon from "../../assets/images/icons/elitezen.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useWindowWidth from "../../(util)/useWindowWidth";

import menuIcon from "../../assets/images/icons/menu-icon.svg";
import SideNav from "../SideNav";

import resumePDF from "../../assets/pdf/resume_Elitezen_01-03-2025_public.pdf";
import scrollToTop from "../../(util)/scrollToTop";

const SCROLL_Y_BREAKPOINT = 30;
const SCREEN_WIDTH_BREAKPOINT = 1_000;

function Header({
    alwaysOpaque
}: {
    alwaysOpaque?: boolean
}) {
    if (alwaysOpaque === undefined) alwaysOpaque = true;
    
    const screenWidth = useWindowWidth();
    const sideNavRef = useRef<HTMLElement>(null);
    const [scrollY, setScrollY] = useState<number>(window.scrollY);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerStyle = {
        backgroundColor: `rgba(0, 0, 0, ${scrollY > SCROLL_Y_BREAKPOINT || alwaysOpaque ? 1 : 0})`,
    };

    const handleSideNavOpen = () => {
        if (!sideNavRef.current) return;

        sideNavRef.current.style.right = "0";
    };

    return (
        <header style={headerStyle}>
            <div className={styles.content}>
                <Link to="/" className={styles.titleContainer} onClick={scrollToTop}>
                    <img src={ElitezenIcon} alt="Elitezen" />
                    <h4>Elitezen</h4>
                </Link>

                {
                    screenWidth > SCREEN_WIDTH_BREAKPOINT ?
                    (
                        <>
                            <div className={styles.navWrapper}>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/" onClick={scrollToTop}>Home</Link>
                                        </li>

                                        <li>
                                            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                                                Resume
                                            </a>
                                        </li>

                                        <li>
                                            <Link to="/contact" className={styles.specialLink} onClick={scrollToTop}>Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            {/* <div className={styles.buttonContainer}>
                                <Link to="contact"  onClick={scrollToTop}>
                                    Contact Me
                                </Link>
                            </div> */}
                        </>
                    ) : (
                        <button onClick={handleSideNavOpen}>
                            <img src={menuIcon} />
                        </button>
                    )
                }
            </div>

            <SideNav ref={sideNavRef} />
        </header>
    );
}

export default Header;
