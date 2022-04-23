// import type { NextPage } from 'next'
import Summary from '../components/Summary'
import Head from '../components/Head'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Footer from '../components/Footer'

export default function Home() {
  return (

    <>
    <Head />
    <Header />
      

      <main className="px-40 py-20 m-10 bg-stone-300 " >
             <Summary />
             <Projects />
             <Experience />
             <Education />
      </main>
      <Footer />

     


    </>
  )
}


