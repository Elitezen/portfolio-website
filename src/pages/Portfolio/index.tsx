import "./index.scss";

import SideBar from "../../components/SideBar";
import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <>
            <SideBar />
            <main>
                <header>
                    <h1>My Works</h1>

                    <h2>
                        Below you will find a list of my projects and services,
                        including websites, web applications, contributions, and
                        developer blogs.
                    </h2>
                </header>

                <section>
                    <h2>Contributer at Scriptly Studios</h2>
                    <p>
                        I have contributed as the Community Developer for{" "}
                        <a href="https://scriptlystudios.com" target="_blank">
                            {" "}
                            Scriptly Studios
                        </a>{" "}
                        since 2023. My duties including managing the community
                        database, moderation system, and moderation client.
                        Additionallly, I developed and deployed a promotional
                        codes API and database system for a game's collaboration
                        with the Fresh Cut platform.
                    </p>

                    <Link to="scriptly-studios">
                        <button>View My Work for Scriptly Studios</button>
                    </Link>
                </section>

                <section>
                    <h2>Expressia</h2>
                    <p>
                        Expressia is a Discord App which revolves collecting,
                        sharing, and managing server emojis and stickers. The
                        client has been added to nearly 500 servers with a total
                        of 80,000 users.
                    </p>

                    <Link to="expressia">
                        <button>View Expressia</button>
                    </Link>
                </section>

                <section>
                    <h2>Open Sourced Contributions</h2>
                    <p>
                        I have contributed code and typings to other projects.
                    </p>

                    <Link to="open-source">
                        <button>View Contributions</button>
                    </Link>
                </section>

                <section>
                    <h2>Blogs and Stack Overflow</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aut, provident fugit voluptatum suscipit
                        repudiandae et pariatur iusto unde delectus? Facere
                        rerum maxime ad impedit reiciendis incidunt illum
                        assumenda nostrum deleniti.
                    </p>

                    <Link to="open-source">
                        <button>View</button>
                    </Link>
                </section>
            </main>
        </>
    );
}
