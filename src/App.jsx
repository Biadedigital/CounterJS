import './App.css'
import React from "react"
import useCounter from "./useCounter"

export default function App() {

  const {count, add, minus} = useCounter()

  return (
    <main>
      <div className="counter">
        <button className="counter--minus" onClick={minus}>–</button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={add}>+</button>
      </div>
    </main>
  )
}
