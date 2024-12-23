import styles from "./index.module.scss";

import ElitezenIcon from "../../assets/images/icons/elitezen.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useWindowWidth from "../../(util)/useWindowWidth";

const SCROLL_Y_BREAKPOINT = 50;
const SCREEN_WIDTH_BREAKPOINT = 1_000;

function Header() {
    const screenWidth = useWindowWidth();
    const header = document.querySelector("header") as HTMLElement | null;

    const [scrollY, setScrollY] = useState<number>(window.scrollY);
    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    if (header) {
        header.style.backgroundColor = `rgba(0, 0, 0, ${scrollY > SCROLL_Y_BREAKPOINT ? 1 : 0})`
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header>
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <img src={ElitezenIcon} alt="Elitezen" />
                    <h4>Elitezen</h4>
                </div>

                {
                    screenWidth > SCREEN_WIDTH_BREAKPOINT ?
                    (
                        <>
                            <div className={styles.navWrapper}>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="#">Home</Link>
                                        </li>

                                        <li>
                                            <Link to="#">Projects</Link>
                                        </li>

                                        <li>
                                            <Link to="#">Services</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div className={styles.buttonContainer}>
                                <a href="#">
                                    Contact Me
                                </a>
                            </div>
                        </>
                    ) : (
                        <p>=</p>
                    )
                }
            </div>
        </header>
    )
}

export default Header;