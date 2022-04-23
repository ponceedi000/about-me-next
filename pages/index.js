// import type { NextPage } from 'next'

export default function Home() {
  return (

    <>
      <head>
        <title>About Me/NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header className="px-10 py-5 text-white bg-stone-700">
        <h1 className="text-3xl font-bold ">Eddie Ponce - Software Developer</h1>
        <h4 className="font-bold ">Vancouver, WA</h4>
      </header>

      <main className="m-10" >
        <img
          src="/headshot.JPG"
          className="flex flex-wrap justify-center h-auto max-w-sm pb-10 transition-shadow duration-300 ease-in-out shadow-none hover:shadow-xl"
          alt=""
        />

        <p className=""><span className="font-bold">Summary: </span>Software Developer with a background in military ground intelligence. Passionate in coding full stack web applications and exercising proper version control practices. Thrives in pair programming environments. USMC Veteran with an active Top-Secret Clearance.</p>
        <h3 className="font-bold">TECHNICAL SKILLS</h3>
        <p className=""><span className="font-bold">Languages: </span>HTML5, CSS3, JavaScript, Python</p>
        <p className=""><span className="font-bold">Tools: </span>MongoDB, Express, React, Node.js, Django, SQLite, PostgreSQL, WordPress, Bootstrap, Mongo Atlas, Pytest, Pandas, NumPy, bs4, Netlify, Heroku, GitHub, Git, VS Code, Poetry, Bash, Oh-My-Zsh</p>
        <section>
          <h3 className="font-bold">PROJECTS</h3>
          <ul className="pl-10 list-disc">
            <li>Zoom Attendance Checker Project - <a href="https://github.com/Zoomify-Inc/zoomify" className="text-blue-600">Go to Repository</a>
              <ul className="pl-10 list-disc"> Feb 2022
                <li>An efficient CLI program used for Zoom organizations to easily track attendance of meeting participants.</li>
                <li>Built with Python 3.9, utilizing Zoom's API to gather meeting information, and Google's API to export information into a presentable and useful data table.</li>
              </ul>
            </li>
          </ul>

          <ul className="pl-10 list-disc">
            <li>Trip Perfect Project - <a href="https://github.com/301d78-final-project" className="text-blue-600">Go to Repository</a>
              <ul className="pl-10 list-disc"> Oct 2021
                <li>This is an event finder web app that utilizes a web API to fetch real-world data of events happening near the client's searched city.</li>
                <li>Built React components to communicate with a Node.js Express API server MongoDB..</li>
              </ul>
            </li>
          </ul>

          <ul className="pl-10 list-disc">
            <li>Mad-Library Project - <a href="https://github.com/ponceedi000/mad-librarians" className="text-blue-600">Go to Repository</a>
              <ul className="pl-10 list-disc"> Sep 2021
                <li>The purpose of the website is to provide a fun and interactive story building platform utilizing local storage and DOM manipulation.</li>
                <li>Built with Vanilla JavaScript, semantic HTML, and pure CSS.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold">EXPERIENCE</h3>
          <ul className="pl-10 list-disc">
            <li>CIK Studio, Vancouver, WA, Co-Owner/Web Developer, Feb 2021 - Present
              <ul className="pl-10 list-disc">
                <li>Recognized by the company for outstanding work with web services/technology.</li>
                <li>Responsible for maintaining/updating multiple websites with new services, marketing strategies, online booking functions, and search engine optimization.</li>
              </ul>
            </li>
          </ul>
          <ul className="pl-10 list-disc">
            <li>USMC, Camp Pendleton, CA, Intelligence Chief (Sergeant/E-5), Aug 2016 – Jun 2021
              <ul className="pl-10 list-disc">
                <li>Was awarded twice, the Navy and Marine Corps Achievement Medal for outstanding performance in both CONUS & O-CONUS operations.</li>
                <li>Appointed as the Regimental Intel Chief with 15 Intel Marines in my charge & responsible for personnel security of over 2,000 Marines in garrison.</li>
                <li>Managed communications between higher/lower echelon units while overseas. Commonly built notable collection plans for our air/ground intelligence assets.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-bold">EDUCATION</h3>
          <ul className="pl-10 list-disc">
            <li>Code Fellows - Seattle, WA
              <ul className="pl-10 list-disc">
                <li>Certificate (pending) - Advanced Software Development in Python - May 2022</li>
              </ul>
            </li>
          </ul>
          <ul className="pl-10 list-disc">
            <li>Navy and Marine Corps Intelligence Training Center - Dam Neck, VA
              <ul className="pl-10 list-disc">
                <li>Certificate - MAGTF Intelligence Specialist - April 2017</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>


      <footer className="text-center bg-stone-700 lg:text-left">
        <div className="container p-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-4">
              <h5 className="uppercase font-bold mb-2.5 text-white"><a href="https://eddieponce-portfolio.netlify.app/"> Portfolio</a></h5>
            </div>
            <div className="mb-4">
              <h5 className="uppercase font-bold mb-2.5 text-white"><a href="http://www.linkedin.com/in/eddie-ponce">LinkedIn</a></h5>   
            </div>
            <div className="mb-4">
              <h5 className="uppercase font-bold mb-2.5 text-white"><a href="https://github.com/ponceedi000">GitHub</a></h5>             
            </div>
            <div className="mb-4">
              <h5 className="uppercase font-bold mb-2.5 text-white">Contact</h5>
              <ul class="list-none mb-0">
          <li>
            <a class="text-white">503-709-5620</a>
          </li>
          <li>
            <a class="text-white">ediberto01@gmail.com</a>
          </li>  
        </ul>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}


