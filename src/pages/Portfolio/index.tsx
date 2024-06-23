import './index.scss';

import SideBar from "../../components/SideBar";
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';

export default function Portfolio() {
  return (
    <>
        <SideBar />
        <main>
			<header>
				<h1>
					My Works
				</h1>

				<h2>
					Below you will find a list of my projects and services, including websites, web
					applications, contributions, and developer blogs.
				</h2>
			</header>

			<section>
				<h2>Contributing Developer at Scriptly Studios</h2>
				<p>
					I have contributed as the Community Developer 
					for <a href="https://scriptlystudios.com" target="_blank"> Scriptly Studios</a> since 2023.
					My duties including managing the community database, moderation system, and moderation 
					client. Additionallly, I developed and deployed a promotional codes API and database system
					for a game's collaboration with the Fresh Cut platform.
				</p>

				<Link to="scriptly-studios" onClick={ScrollToTop}>
					<button>
						View My Work for Scriptly Studios
					</button>
				</Link>
			</section>

			<section>
				<h2>Expressia</h2>
				<p>
					Expressia is a Discord App which revolves collecting, sharing, and managing server emojis and stickers. The client has
					been added to nearly 500 servers with a total of 80,000 users.
				</p>

				<Link to="expressia" onClick={ScrollToTop}>
					<button>
						View Expressia
					</button>
				</Link>
			</section>

			<section>
				<h2>Open Sourced Projects and Contributions</h2>
				<p>
					My open-sourced libraries and contributions to others.
				</p>

				<Link to="open-source" onClick={ScrollToTop}>
					<button>
						View Contributions
					</button>
				</Link>
			</section>

			<section>
				<h2>Programming Articles</h2>
				<p>
					My writings relating to developing in Node.JS, published on dev.to
				</p>

				<Link to="extras" onClick={ScrollToTop}>
					<button>
						View
					</button>
				</Link>
			</section>
        </main>
    </>
  )
}