import SkillsStyles from '../styles/skills.module.css'
import Head from 'next/head'
import { 
	FaGithub,
	FaTwitter,
	FaLinkedin,
	FaNodeJs,
 } from "react-icons/fa"
 import { 
	SiInstagram,
	SiHashnode,
	SiPython,
	SiJavascript,
	SiTypescript,
	SiGnubash,
	SiC,
	SiCplusplus,
	SiReact,
	SiNextdotjs,
	SiGatsby,
	SiStreamlit,
	SiRedux,
	SiFramer,
	SiTailwindcss,
	SiMaterialui,
	SiChakraui,
	SiBootstrap,
	SiExpress,
	SiDjango,
	SiFlask,
	SiApollographql,
	SiGraphql,
	SiFastapi,
	SiFirebase,
	SiSupabase,
	SiPostgresql,
	SiMysql,
	SiSqlite,
	SiMongodb,
	SiRedis,
	SiPrisma,
	SiTensorflow,
	SiPytorch,
	SiKeras,
	SiScikitlearn,
	SiOpencv,
	SiDocker,
	SiKubernetes,
	SiJenkins,
	SiTerraform,
	SiAnsible,
	SiGithubactions,
	SiGooglecloud,
	SiAmazonaws,
	SiLatex,
	SiUbuntu,
	SiLinux,
	SiKalilinux,
	SiNumpy,
	SiPandas,
	SiScipy,
	SiJest,
	SiPytest,
	SiHeroku,
	SiNetlify,
	SiVercel,
	SiBabel,
	SiFigma,
	SiCanva,
	SiPostman,
	SiGit,
	SiDigitalocean,
	SiGithub,
	SiGoland,
	SiGmail,
 } from "react-icons/si"
import {
	BsChevronDoubleDown
} from "react-icons/bs"
import {
	SlCalender
} from "react-icons/sl"

const Home = () => {

	return (
		<div>
			<Head>
				<title>Ashish Singh Portfolio</title>
				<meta name="description" content="Portfolio for Ashish Singh" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/triple-skulls.ico" />
			</Head>


			<a id="home"></a>
			<div>
				<div className="pt-16 md:mx-32 md:pt-44">
					<div className="md:flex md:justify-between">
						<div>
							<div className="flex space-x-4 justify-center mb-16 md:flex md:flex-col md:space-y-4 md:items-center md:my-16 md:mx-5 hover:fill-green-400">
								<a className="ml-4" href="https://github.com/Ashish13s">
									<FaGithub size={25} className='hover:fill-green-400' />
								</a>
								<a  href="https://twitter.com/ASHISHS14693738">
									<FaTwitter size={25} className='hover:fill-green-400' />
								</a>
								<a href="https://www.linkedin.com/in/ashishsingh13s/">
									<FaLinkedin size={25} className='hover:fill-green-400' />
								</a>
								<a href="mailto:ashishsingh2024.13s@gmail.com">
									<SiGmail size={25} className='hover:fill-green-400' />
								</a>
								<a href="https://www.instagram.com/ashish.13s/">
									<SiInstagram size={25} className='hover:fill-green-400' />
								</a>
								
							</div>
						</div>
						<div className="items-center mx-12 grow flex flex-col md:items-start">
							<h1 className="text-6xl flex items-center font-bold mb-4">
								Ashish Singh
							</h1>
							<h1 className="text-2xl mb-4 text-green-400">
								Software Developer
							</h1>
							<p className="mb-12">
								I&apos;m Ashish Singh, a Full Stack Web Developer that loves tinkering with Artificial Intelligence and Machine Learning
							</p>
							<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold" href="mailto:ashishsingh2024.13@gmail.com">
								Say Hello
							</a>
						</div>
					</div>
					<div className="">
						<a className="flex justify-center mt-20 space-x-4 items-center" href="#about">
							<BsChevronDoubleDown />
							<div>Scroll down</div>
							<BsChevronDoubleDown />
						</a>
					</div>
				</div>
			</div>


			<a id="about"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">About Me</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Introduction</h1>
					<div className="flex flex-col space-y-12 md:space-x-32 justify-center items-center md:items-start md:flex-row">
						<img className="h-72 w-74 rounded-xl" src="DP.jfif" />
						<div className="flex flex-col space-y-20 justify-center items-center grow mx-12 md:items-start">
							<p>
								I&apos;m well versed in the technical domains of Web Development,AI/ML .
								<br />
								I&apos;m a current undergraduate computer science and engineering major at the Indian Institute of Information Technology in Gwalior.
								<br />
								Feel free to reach out to me in case of any internship or job opportunites as well. Would also be willing to work as a freelancer too.
							</p>
							<a className="bg-green-500 text-white p-4 flex w-44 text-1xl rounded-xl justify-around font-semibold" download href="https://drive.google.com/file/d/1iRwmkHN2LVY1-Dy_doB8DA7-dKum1Qa4/view?usp=sharing">
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>


			<a id="skills"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-44 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Skills</h1>
					<h1 className="text-2xl mb-4 text-green-400">My Technical Skills</h1>
					<div className="grid grid-cols-4 md:grid-cols-12 gap-x-8 gap-y-8 ">
						<div className={SkillsStyles.tooltip}><SiPython size={50} /><span className={SkillsStyles.tooltiptext}>Python</span></div>
						<div className={SkillsStyles.tooltip}><SiJavascript size={50} /><span className={SkillsStyles.tooltiptext}>Javascript</span></div>
						<div className={SkillsStyles.tooltip}><SiTypescript size={50} /><span className={SkillsStyles.tooltiptext}>Typescript</span></div>
						{/* <div className={SkillsStyles.tooltip}><SiGoland size={50} /><span className={SkillsStyles.tooltiptext}></span></div> */}
						<div className={SkillsStyles.tooltip}><SiC size={50} /><span className={SkillsStyles.tooltiptext}>C</span></div>
						<div className={SkillsStyles.tooltip}><SiCplusplus size={50} /><span className={SkillsStyles.tooltiptext}>C++</span></div>
						<div className={SkillsStyles.tooltip}><SiGnubash size={50} /><span className={SkillsStyles.tooltiptext}>BASH</span></div>
						<div className={SkillsStyles.tooltip}><SiReact size={50} /><span className={SkillsStyles.tooltiptext}>React</span></div>
						<div className={SkillsStyles.tooltip}><SiNextdotjs size={50} /><span className={SkillsStyles.tooltiptext}>Next.js</span></div>
						<div className={SkillsStyles.tooltip}><SiGatsby size={50} /><span className={SkillsStyles.tooltiptext}>Gatsby</span></div>
						<div className={SkillsStyles.tooltip}><SiStreamlit size={50} /><span className={SkillsStyles.tooltiptext}>Streamlit</span></div>
						<div className={SkillsStyles.tooltip}><SiRedux size={50} /><span className={SkillsStyles.tooltiptext}>Redux</span></div>
						<div className={SkillsStyles.tooltip}><SiFramer size={50} /><span className={SkillsStyles.tooltiptext}>Framer</span></div>
						<div className={SkillsStyles.tooltip}><SiTailwindcss size={50} /><span className={SkillsStyles.tooltiptext}>TailwindCSS</span></div>
						<div className={SkillsStyles.tooltip}><SiMaterialui size={50} /><span className={SkillsStyles.tooltiptext}>MaterialUI</span></div>
						<div className={SkillsStyles.tooltip}><SiChakraui size={50} /><span className={SkillsStyles.tooltiptext}>ChakraUI</span></div>
						<div className={SkillsStyles.tooltip}><SiBootstrap size={50} /><span className={SkillsStyles.tooltiptext}>Bootstrap</span></div>
						<div className={SkillsStyles.tooltip}><SiExpress size={50} /><span className={SkillsStyles.tooltiptext}>Express</span></div>
						<div className={SkillsStyles.tooltip}><SiDjango size={50} /><span className={SkillsStyles.tooltiptext}>Django</span></div>
						<div className={SkillsStyles.tooltip}><SiFlask size={50} /><span className={SkillsStyles.tooltiptext}>Flask</span></div>
						{/* <div className={SkillsStyles.tooltip}><SiApollographql size={50} /><span className={SkillsStyles.tooltiptext}>Apollographql</span></div>
						<div className={SkillsStyles.tooltip}><SiGraphql size={50} /><span className={SkillsStyles.tooltiptext}>Graphql</span></div> */}
						<div className={SkillsStyles.tooltip}><FaNodeJs size={50} /><span className={SkillsStyles.tooltiptext}>NodeJs</span></div>
						<div className={SkillsStyles.tooltip}><SiFastapi size={50} /><span className={SkillsStyles.tooltiptext}>FastAPI</span></div>
						<div className={SkillsStyles.tooltip}><SiFirebase size={50} /><span className={SkillsStyles.tooltiptext}>Firebase</span></div>
						<div className={SkillsStyles.tooltip}><SiSupabase size={50} /><span className={SkillsStyles.tooltiptext}>Supabase</span></div>
						<div className={SkillsStyles.tooltip}><SiPostgresql size={50} /><span className={SkillsStyles.tooltiptext}>Postgresql</span></div>
						<div className={SkillsStyles.tooltip}><SiMysql size={50} /><span className={SkillsStyles.tooltiptext}>Mysql</span></div>
						<div className={SkillsStyles.tooltip}><SiSqlite size={50} /><span className={SkillsStyles.tooltiptext}>Sqlite</span></div>
						<div className={SkillsStyles.tooltip}><SiMongodb size={50} /><span className={SkillsStyles.tooltiptext}>Mongodb</span></div>
						<div className={SkillsStyles.tooltip}><SiRedis size={50} /><span className={SkillsStyles.tooltiptext}>Redis</span></div>
						<div className={SkillsStyles.tooltip}><SiPrisma size={50} /><span className={SkillsStyles.tooltiptext}>Prisma</span></div>
						<div className={SkillsStyles.tooltip}><SiTensorflow size={50} /><span className={SkillsStyles.tooltiptext}>Tensorflow</span></div>
						<div className={SkillsStyles.tooltip}><SiPytorch size={50} /><span className={SkillsStyles.tooltiptext}>Pytorch</span></div>
						<div className={SkillsStyles.tooltip}><SiKeras size={50} /><span className={SkillsStyles.tooltiptext}>Keras</span></div>
						<div className={SkillsStyles.tooltip}><SiScikitlearn size={50} /><span className={SkillsStyles.tooltiptext}>Scikitlearn</span></div>
						<div className={SkillsStyles.tooltip}><SiOpencv size={50} /><span className={SkillsStyles.tooltiptext}>OpenCV</span></div>
						<div className={SkillsStyles.tooltip}><SiDocker size={50} /><span className={SkillsStyles.tooltiptext}>Docker</span></div>
						<div className={SkillsStyles.tooltip}><SiKubernetes size={50} /><span className={SkillsStyles.tooltiptext}>Kubernetes</span></div>
						{/* <div className={SkillsStyles.tooltip}><SiJenkins size={50} /><span className={SkillsStyles.tooltiptext}>Jenkins</span></div>
						<div className={SkillsStyles.tooltip}><SiTerraform size={50} /><span className={SkillsStyles.tooltiptext}>Terraform</span></div>
						<div className={SkillsStyles.tooltip}><SiAnsible size={50} /><span className={SkillsStyles.tooltiptext}>Ansible</span></div>*/}
						<div className={SkillsStyles.tooltip}><SiGithubactions size={50} /><span className={SkillsStyles.tooltiptext}>Githubactions</span></div>	 
						<div className={SkillsStyles.tooltip}><SiGooglecloud size={50} /><span className={SkillsStyles.tooltiptext}>GCP</span></div>
						<div className={SkillsStyles.tooltip}><SiAmazonaws size={50} /><span className={SkillsStyles.tooltiptext}>AWS</span></div>
						<div className={SkillsStyles.tooltip}><SiLatex size={50} /><span className={SkillsStyles.tooltiptext}>Latex</span></div>
						<div className={SkillsStyles.tooltip}><SiUbuntu size={50} /><span className={SkillsStyles.tooltiptext}>Ubuntu</span></div>
						<div className={SkillsStyles.tooltip}><SiLinux size={50} /><span className={SkillsStyles.tooltiptext}>Linux</span></div>
						<div className={SkillsStyles.tooltip}><SiKalilinux size={50} /><span className={SkillsStyles.tooltiptext}>Kalilinux</span></div>
						<div className={SkillsStyles.tooltip}><SiNumpy size={50} /><span className={SkillsStyles.tooltiptext}>Numpy</span></div>
						<div className={SkillsStyles.tooltip}><SiPandas size={50} /><span className={SkillsStyles.tooltiptext}>Pandas</span></div>
						<div className={SkillsStyles.tooltip}><SiScipy size={50} /><span className={SkillsStyles.tooltiptext}>Scipy</span></div>
						<div className={SkillsStyles.tooltip}><SiJest size={50} /><span className={SkillsStyles.tooltiptext}>Jest</span></div>
						<div className={SkillsStyles.tooltip}><SiPytest size={50} /><span className={SkillsStyles.tooltiptext}>Pytest</span></div>
						<div className={SkillsStyles.tooltip}><SiHeroku size={50} /><span className={SkillsStyles.tooltiptext}>Heroku</span></div>
						<div className={SkillsStyles.tooltip}><SiNetlify size={50} /><span className={SkillsStyles.tooltiptext}>Netlify</span></div>
						<div className={SkillsStyles.tooltip}><SiVercel size={50} /><span className={SkillsStyles.tooltiptext}>Vercel</span></div>
						<div className={SkillsStyles.tooltip}><SiBabel size={50} /><span className={SkillsStyles.tooltiptext}>Babel</span></div>
						<div className={SkillsStyles.tooltip}><SiFigma size={50} /><span className={SkillsStyles.tooltiptext}>Figma</span></div>
						<div className={SkillsStyles.tooltip}><SiCanva size={50} /><span className={SkillsStyles.tooltiptext}>Canva</span></div>
						<div className={SkillsStyles.tooltip}><SiPostman size={50} /><span className={SkillsStyles.tooltiptext}>Postman</span></div>
						<div className={SkillsStyles.tooltip}><SiGit size={50} /><span className={SkillsStyles.tooltiptext}>Git</span></div>
						<div className={SkillsStyles.tooltip}><SiDigitalocean size={50} /><span className={SkillsStyles.tooltiptext}>Digitalocean</span></div>
						<div className={SkillsStyles.tooltip}><SiGithub size={50} /><span className={SkillsStyles.tooltiptext}>Github</span></div>
					</div>
				</div>
			</div>




			<a id="projects"></a>
			<div>
				<div className="pt-28 md:mx-32 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Projects</h1>
					<h1 className="text-2xl mb-4 text-green-400">Things I&apos;ve Created</h1>
					<div className="grid grid-cols-1 gap-y-8">
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Movie Booking and Listing App</h1>
							<p className="">
							Created an application for users to log in to and make/manage bookings for their movie premieres. Used Express to incorporate REST API features into the server.Used MaterialUI to style the frontend and create appealing designs to make the UI more attractive.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/Ashish13s/IMDB-Clone">View</a>
							</div>
						</div>
						
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Priority Management Tracker</h1>
							<p className="">
								Created an application that helps users track their daily routine and activities based on their priority.Used React to implement the frontend and optimize site performance, styled using TailwindCSS.Implemented backend using Express and Node and managed a database created on MongoDB.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/Ashish13s/Priority-Management-Tracker">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Fitness Tracker App</h1>
							<p className="">
								UtilizesGym exercise log for users to track their activities. Created front end using React, styled using Bootstrap, MongoDB for database and Express for backend and API, hosted on netlify.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/Ashish13s/Fitness-Tracking-App">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Football-notifier</h1>
							<p className="">
								Used scheduled web scraping and automation in order to crawl the web.Extracted and formatted data from web portal using BeautifulSoup.Integrated the application with notification system to provide push notification on fixed intervals.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/Ashish13s/Football-notifier">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">User Authenticator</h1>
							<p className="">
								Created an authentication system with CRUD features.Developed user friendly UI/UX experience using HTML, CSS and Javascript.Utilized Python Flask to implement the backend server.Managed database using SQLAlchemy based on Sqlite.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/Ashish13s/user-authenticator">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Clothing Recommender</h1>
							<p className="">
								Provides suggestions to user based on the image provided by the user. Trained a K Nearest Neighbour Model with 86 percent accuracy as well a Convolutional Neural Network with 88 percent accuracy in order to achieve this.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/Ashish13s/Clothing-Recommender">View</a>
							</div>
						</div>
						<div className="flex flex-col items-center py-10 px-10 mx-4 shadow-sm shadow-green-400 rounded-xl space-y-4">
							<h1 className="text-3xl font-semibold pb-4">Portfolio Website</h1>
							<p className="">
								Personal portfolio website. Created using NextJS and hosted on Vercel.
							</p>
							<div>
								<a className="bg-green-500 text-white p-4 flex w-18 text-1xl rounded-xl font-semibold mt-4" href="https://github.com/Ashish13s/Portfolio">View</a>
							</div>
						</div>
					</div>
					<a className="bg-green-500 text-white p-4 flex w-36 text-1xl rounded-xl justify-around font-semibold mt-12" href="https://github.com/Ashish13s">View All</a>
				</div>
			</div>

		<a id="contactme"></a>			
			<footer>
				<div className="pt-28 md:mx-32 mb-16 md:pt-48 flex flex-col items-center">
					<h1 className="text-5xl font-semibold mb-4">Ashish Singh</h1>
					<h1 className="text-2xl mb-4 text-green-400">Reach Out</h1>
					<div className="flex space-x-4 items-center my-16 mx-5">
						<a href="https://github.com/Ashish13s">
							<FaGithub size={25} className='hover:fill-green-400' />
						</a>
						<a href="https://twitter.com/ASHISHS14693738">
							<FaTwitter size={25} className='hover:fill-green-400' />
						</a>
						<a href="https://www.linkedin.com/in/ashishsingh13s/">
							<FaLinkedin size={25} className='hover:fill-green-400' />
						</a>
						<a href="mailto:ashishsingh2024.13s@gmail.com">
							<SiGmail size={25} className='hover:fill-green-400' />
						</a>
						<a href="https://www.instagram.com/ashish.13s/">
									<SiInstagram size={25} className='hover:fill-green-400' />
						</a>
					</div>
					<h1>All rights reserved</h1>
				</div>
			</footer>
		</div>
	)
}

export default Home
