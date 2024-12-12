import './App.css'
import NavBar from './components/navbar/navBar.tsx'
import Banner from './components/banner/banner.tsx'
import Presentation from "./components/presentation/presentation.tsx"
import Skills from './components/skills/skills.tsx'
import Projects from './components/projects/projects.tsx'
import Footer from './components/footer/footer.tsx'
import Background from './components/background/background.tsx'

function App() {

  return (
    <>  
      <NavBar />
      <Banner />
      <Presentation />
      <Skills />
      <Background />
      <Projects />
      <Footer />
    </>
  )
}

export default App
