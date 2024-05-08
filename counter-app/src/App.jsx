import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(e) {
    const operation = e.target.innerHTML;
    console.log(operation);

    switch(operation) {
      case "+":
        setCount(count+1);
        break;
      case "-":
        if(count>0)
        setCount(count-1);
        break;
      case "Reset":
        setCount(0);
        break;
      default:
        break;
    }

  }

  return (
    <>
      <h2>Counter App</h2>
      <h1>{count}</h1>

      <div className='buttons' onClick={handleClick}>
        <p>+</p>
        <p>-</p>
        <p>Reset</p>
      </div>
    </>
  )
}

export default App
