import './App.css'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {

  return (
    <main className='main'>
      <Header />
      <Home />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
