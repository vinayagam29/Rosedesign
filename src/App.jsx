import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App