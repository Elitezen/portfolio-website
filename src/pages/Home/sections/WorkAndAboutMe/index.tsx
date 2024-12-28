import { useState } from "react";
import styles from "./index.module.scss";
import MyWork from "../MyWork";
import AboutMe from "../AboutMe";

enum TabName {
    MyWork,
    AboutMe
}

function WorkAndAboutMe() {
    const [selectedTab, setSelectedTab] = useState<TabName>(TabName.MyWork);

    const switchStyle = (tabName: TabName) => selectedTab === tabName ? styles.selected : undefined;
    const getSquarePosition = () => selectedTab === TabName.MyWork ? "translateX(0)" : "translateX(100%)";

    const handleButtonClick = (tabName: TabName) => {
        if (tabName === selectedTab) return;

        setSelectedTab(tabName);
    }

    return (
        <section className={styles.workAndAboutMe}>
            <div className={styles.content}>
                <div className={styles.containerHeader}>
                    <nav>
                        <ul>
                            <div
                                className={styles.movingSquare}
                                style={{ transform: getSquarePosition() }} 
                            />
                            <li>
                                <button
                                    onClick={() => handleButtonClick(TabName.MyWork)}
                                    className={switchStyle(TabName.MyWork)}>
                                    <p>My Work</p>
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleButtonClick(TabName.AboutMe)}
                                    className={switchStyle(TabName.AboutMe)}>
                                    <p>About Me</p>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.innerPageWrapper}>
                    <MyWork visible={selectedTab === TabName.MyWork}/>
                    {/* <AboutMe visible={selectedTab === TabName.AboutMe}/> */}
                </div>
            </div>
        </section>
    )
}

export default WorkAndAboutMe