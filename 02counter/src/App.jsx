import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)     // useState is returning array that's why accessing values like [counter, setCounter]
  
  //let counter = 50

  const addValue = () => {
    if (counter >= 20) {
      return
    }
    setCounter(counter+1)
  }

  const removeValue = () => {
    if (counter <= 0) {
      return
    }
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >Remove value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
