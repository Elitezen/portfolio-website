import { useState } from "react";
import styles from "./index.module.scss";

const validateEmail = (email:string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

function ContactForm() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [notice, setNotice] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean>(false);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (validateEmail(email)) {
          setIsValid(true);
          setNotice("Sending...");
          sendEmail();
        } else {
          setIsValid(false);
          setNotice("Please enter a valid email address.");
        }
    };

    const sendEmail = async() => {
        try {
            const res = await fetch("http://localhost:3000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message
                })
            });

            if (res.status == 200) {
                setIsValid(true);
                setNotice("Your message has been successfully sent!");
            } else {
                setIsValid(false);
                setNotice("An unknown error occured. Please try again later.");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    placeholder="Name *"
                    required />

                <input 
                    type="text" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email *"
                    required />

                <input 
                    type="text" 
                    id="subject" 
                    value={subject} 
                    onChange={e => setSubject(e.target.value)}
                    placeholder="Subject"/>

                <textarea
                    id="message"
                    className={styles.messageInput}
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Message *"
                    required/>

                <p style={{
                    opacity: notice.length ? 1 : 0,
                    color: isValid ? '#FFF' : '#F00'
                }}>{notice}</p>

                <button
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm;