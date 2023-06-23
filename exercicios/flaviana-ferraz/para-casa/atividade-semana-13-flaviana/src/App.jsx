import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <Header/>
      <Bio/>
      <div className="local-cards">
        <Cards/>
      </div>
      <Footer/>
    </>
  )
}

export default App;
