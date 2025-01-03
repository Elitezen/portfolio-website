import { useRef, useState } from "react";
import styles from "./index.module.scss";

import ReCAPTCHA from 'react-google-recaptcha';

const captchaSiteKey = "6LdosqwqAAAAAE2RkmDkHikzXuw86Y6_1yYUImrY";

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
    const submitButtonRef = useRef<HTMLButtonElement | null>(null);

    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    const handleCaptchaChange = (value:string | null) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (!captchaValue) {
            setNotice("Please complete the CAPTCHA");
            return
        }

        if (validateEmail(email)) {
            setButtonDisabled(true);
            setIsValid(true);
            setNotice("Sending...");
            sendEmail();
        } else {
            setIsValid(false);
            setNotice("Please enter a valid email address.");
        }
    };

    const setButtonDisabled = (disabled: boolean) => {
        if (!submitButtonRef.current) return;

        submitButtonRef.current.disabled = disabled;
        submitButtonRef.current.style.opacity = disabled ? "0.5" : "1";
    }

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
                    message,
                    'g-recaptcha-response': captchaValue
                })
            });

            if (res.status == 200) {
                setIsValid(true);
                setNotice("Your message has been successfully sent!");
            } else {
                setIsValid(false);
                setNotice("An unknown error occured. Please try again later or email me manually at dev.elitezen@gmail.com");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setButtonDisabled(false);
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
                    color: isValid ? '#000' : '#F00'
                }}>{notice}</p>

                <ReCAPTCHA
                    style={{
                        marginBottom: "1em"
                    }}
                    sitekey={captchaSiteKey}
                    onChange={handleCaptchaChange}
                    />

                <button
                    type="submit"
                    ref={submitButtonRef as any}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm;