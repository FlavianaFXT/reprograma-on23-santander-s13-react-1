import './App.css'
import Card from './components/Card'
import { useState } from 'react'
import Relogio from './components/Relogio'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Card/>
      <Relogio/>
      <div className='card'>
        <button onClick={()=>{setCount((count)=> count+1)}}> count is {count}</button>
      </div>
    </>
  )
}

export default App;
