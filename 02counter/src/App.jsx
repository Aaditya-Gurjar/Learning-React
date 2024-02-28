import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  const increaseValue = () => {
    if (counter >= 20) {
      counter = 20
      setCounter(20);
      console.log("Value added ", counter);
    }
    else{
      setCounter(counter + 1);
      console.log("Value added ", counter);
    }
  }

  const decreaseValue = () => {
    if (counter <= 0) {
      counter = 0;
      setCounter(counter);
      console.log("Value decreased ", counter);
    }
    else{
      setCounter(counter - 1);
      console.log("Value decreased ", counter);
    }
  }

  return (
    <>
     <h1>Chai aur React </h1>
     <h2>Counter Value : {counter}</h2>
     
     <button onClick={increaseValue}>Increase Value</button>
     <br />
     <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
