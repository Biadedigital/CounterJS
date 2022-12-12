import {useState} from "react"

function useCounter() {
  
  const [count, setCount] = useState(0)

  function minus() {
    setCount(
      prevCount => prevCount - 1
    )
  }

  function add() {
    setCount(
      prevCount => prevCount + 1
    )
  }

  return {count, add, minus}
}

export default useCounter
