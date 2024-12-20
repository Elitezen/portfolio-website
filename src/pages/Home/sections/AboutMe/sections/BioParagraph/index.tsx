import styles from "./index.module.scss";

import PersonAtComputerIcon from "../../../../../../assets/images/graphics/person_at_computer.svg";

function BioParagraph() {
    return (
        <section className={styles.bioParagraph}>
            <h1>A Little About Me...</h1>

            <div className={styles.paragraphAndGraphic}>
                <div className={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quia vel at amet placeat accusamus quidem fugiat dolorem reiciendis cupiditate architecto magni sequi voluptatum impedit voluptatem iusto, modi voluptate tenetur qui dignissimos sunt veniam. Dignissimos aperiam explicabo nemo hic eligendi?
                </div>

                <div className={styles.graphic}>
                    <img src={PersonAtComputerIcon} alt="Person at Computer" />
                </div>
            </div>
        </section>
    )
}

export default BioParagraph;