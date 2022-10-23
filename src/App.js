import Counter from './Counter';
import { useState } from "react";

const App = () => {  
  const [count, setCount] = useState(0);

  const increase = () => { 
      if (count === 0) {
        setCount(count + 1)
      }
      else
      setCount(count + 1)
  }

  const decrement = () => {
    if (count <= 0) {
      setCount(0)
    }
    else
    setCount(count - 2) 
  }
    
  const reset = () => {
      setCount(count - count)
  }

  return ( 
    <>
    <Counter count={count} increase={increase} decrement={decrement} reset={reset} />
    </>
  )

}
export default App;
