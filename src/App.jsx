import Header from './components/Header'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import TitleComponent from './components/TitleComponent'
import About from './components/About'
import Workshop from './components/Workshop'
import Agenda from './components/Agenda'
import Challenges from './components/Challanges'
import RegistrationBtn from './components/RegistrationBtn'
import Sponsers from './components/Sponsers'
import Footer from './components/Footer'
function App() {

  return (
      <>
      <Header/>
      <TitleComponent/>
      <About/>
      <Workshop/>
      <Agenda/>
      <Challenges/>
      <RegistrationBtn/>
      <Sponsers/>
      <Footer/>
      </>
  )
}

export default App
