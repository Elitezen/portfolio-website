import SideBar from "../../components/SideBar";

import './index.scss';

import type { SkillsData } from "../../types";

import TypeScriptLogo from '../../assets/logos/typescript_logo.png';
import JavaScriptLogo from '../../assets/logos/javascript_logo.png';
import HTML5Logo from '../../assets/logos/html5_logo.webp';
import CSS3Logo from '../../assets/logos/css3_logo.webp';
import NodeJSLogo from '../../assets/logos/nodejs_logo.png';
import JqueryLogo from '../../assets/logos/jquery_logo.png';
import SCSSLogo from '../../assets/logos/scss_logo.png';
import BoostrapLogo from "../../assets/logos/bootstrap_logo.png";
import ReactLogo from '../../assets/logos/react_logo.png';
import VueLogo from '../../assets/logos/vue_logo.png';
import ExpressLogo from '../../assets/logos/express_logo.png';
import MongoDBLogo from '../../assets/logos/mongodb_logo.png';
import RestAPILogo from '../../assets/logos/rest_api_logo.png';
import PythonLogo from '../../assets/logos/python_logo.webp';

import ScriptlyStudiosLogo from '../../assets/logos/scriptly_studios_logo.webp';
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const frontEndSkills:SkillsData[] = [
	{
		name: 'HTML5',
		logoPath: HTML5Logo,
		aboutURL: '#'
	},
	{
		name: 'CSS3',
		logoPath: CSS3Logo,
		aboutURL: '#'
	},
	{
		name: 'Scss/Sass',
		logoPath: SCSSLogo,
		aboutURL: '#'
	},
	{
		name: "Boostrap 5",
		logoPath: BoostrapLogo,
		aboutURL: '#'
	},
	{
		name: 'JavaScript',
		logoPath: JavaScriptLogo,
		aboutURL: '#'
	},
	{
		name: 'jQuery',
		logoPath: JqueryLogo,
		aboutURL: '#'
	},
	{
		name: 'React',
		logoPath: ReactLogo,
		aboutURL: '#'
	},
	{
		name: 'Vue',
		logoPath: VueLogo,
		aboutURL: '#'
	},
];
const backEndSkills:SkillsData[] = [
	{
		name: 'TypeScript',
		logoPath: TypeScriptLogo,
		aboutURL: '#'
	},
	{
		name: 'Python',
		logoPath: PythonLogo,
		aboutURL: '#'
	},
	{
		name: 'NodeJS',
		logoPath: NodeJSLogo,
		aboutURL: '#'
	},
	{
		name: 'Express',
		logoPath: ExpressLogo,
		aboutURL: '#'
	},
	{
		name: 'MongoDB',
		logoPath: MongoDBLogo,
		aboutURL: '#'
	},
	{
		name: 'Rest API',
		logoPath: RestAPILogo,
		aboutURL: '#'
	},
];

function Home() {
  	return (
		<>
			<SideBar />
			<main>
				<header>
					<h1>I'm Alejandro</h1>
					<h2>An Aspiring <strong>Full-Stack Developer</strong> With <strong>Production and Open-Source Experience</strong></h2>

					<div id="header-buttons">
						<a href="/portfolio">
							<button>
								View My Work
							</button>
						</a>

						<a href="https://github.com/Elitezen">
							<button>
								View My Github
							</button>
						</a>

						<a href="/contact">
							<button>
								Contact Me
							</button>
						</a>
					</div>
				</header>

				<section>
					<h2>About Me</h2>
					<p>
						I am web developer based in Florida with experience in both front and back end technologies.
						From curating <a href="/portfolio">personal projects</a>, authoring various <a href="/portfolio/open-source">open-sourced libraries</a>, to managing the <a href="/portfolio/scriptly-studios">database and moderation
						system</a> for an established game studio, I've had thorough experience engineering software
						as a freelancer.
					</p>
				</section>

				<section>
					<h2>My Knowledge Laid Out</h2>
					
					<section id="skills">
						<h3>Front-End</h3>

						<ul>
							{
								frontEndSkills.map((skill, i) => (
									<li key={i}>
										<figure>
											<img src={skill.logoPath} alt={`${skill.name} logo`} />
											<figcaption>{skill.name}</figcaption>
										</figure>
									</li>
								))
							}
						</ul>
					</section>

					<section id="skills">
						<h3>Back-End</h3>

						<ul>
							{
								backEndSkills.map((skill, i) => (
									<li key={i}>
										<figure>
											<img src={skill.logoPath} alt={`${skill.name} logo`} />
											<figcaption>{skill.name}</figcaption>
										</figure>
									</li>
								))
							}
					</ul>
					</section>
				</section>

				<section>
					<h2>Trusted by <a href="https://scriptlystudios.com/" target="_blank"><u>Scriptly Studios</u></a></h2>

					<section className="image-and-text">
						<div className="image-and-text-content">
							<figure>
								<img src={ScriptlyStudiosLogo} alt="Scriptly Studios Logo" />
							</figure>

							<p>
								"We've employed Alejandro to develop & maintain a highly advanced multi-feature Discord bot
								 to help us manage our community of 20,000+ members, and it's been nothing but an incredible
								  experience. Alejandro continuously demonstrates high proficiency and understanding in his
								   field of work, and especially excels at employing problem-solving skills to work around issues
								    with Discord's API which frequently limit the capabilities of Discord bots. He works and delivers
									 finished products quickly, fixes any problems or errors even quicker, and is overall a very enjoyable
									  person to work with."<br /><br />Jordan T. - Scriptly Studios Community Manager<br /><br /> 
									  <a href="/portfolio/scriptly-studios">View my work for Scriptly Studios</a>
							</p>
						</div>
					</section>
				</section>

				<section>
					<h2>Review my Portfolio</h2>
					<Link to="/portfolio" onClick={ScrollToTop}>
						<button style={{ margin: '2.5em 0' }}>
							View My Work
						</button>
					</Link>
				</section>
			</main>
		</>
  	)
}

export default Home;