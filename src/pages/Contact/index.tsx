import Header from '../../components/Header';
import ContactForm from './sections/ContactForm';

import styles from "./index.module.scss";

function Contact() {
    return (
        <main className={styles.contact}>
            <Header />
            <div className={styles.content}>
                <h1>Contact</h1>
                <p>You can also email me manually at <a href="mailto:dev.elitezen@gmail.com">dev.elitezen@gmail.com</a></p>
                <ContactForm />
            </div>
        </main>
    )
}

export default Contact;