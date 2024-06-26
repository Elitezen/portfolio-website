import './index.scss'
import SideBar from "../../components/SideBar";

function Contact() {
    return (
        <>
            <SideBar />
            <main>
                <header>
                    <h1>Contact Me</h1>
                </header>

                <section>
                    <p>Email: <a href="mailto:dev.alejandromarin@gmail.com">dev.alejandromarin@gmail.com</a></p>
                    <p>Discord: @dev_elitezen, @elitezen</p>
                </section>
            </main>
        </>
    )
}

export default Contact;