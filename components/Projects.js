export default function Projects() {
  return (
    <>
     <section className="pt-14">
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
    </>
  )
}