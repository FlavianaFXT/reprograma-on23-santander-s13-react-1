import './App.css'
import PrincipalTitle from './components/PrincipalTitle'
import Presentation from './components/Presentation'
import Cards from './components/Cards'

function App() {
  
  return (
    <>
      <PrincipalTitle/>
      <Presentation/>
      <div className="local-cards">
        <Cards/>
      </div>
      <footer>
        <p>Site desenvolvido no curso Reprograma - aulas de React (Semana 13) - Prof Lilit Bandeira - 
        por Flaviana Ferraz</p>
      </footer>
    </>
  )
}

export default App
