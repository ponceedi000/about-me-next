export default function Footer() {
  return (
    <>
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