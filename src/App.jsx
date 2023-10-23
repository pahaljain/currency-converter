import { useState } from "react"
import Input from "./components/Input"
import { useEffect } from "react"

function App() {

  const [from, setFrom] = useState(1)
  const [to, setTo] = useState(0)
  const [fromType, setFromType] = useState("usd")
  const [toType, setToType] = useState("inr")

  const [options , setOptions] = useState([]);

  //for creating options array
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromType}.json`)
      .then(data => data.json())
      .then(data => setOptions(Object.keys(data[fromType])))
  }, [])

  // for converting the currency
  const convert = () => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromType}.json`)
      .then(data => data.json())
      .then(data => setTo((from * (data[fromType][toType])).toFixed(4)))
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setFromType(toType)
    setToType(fromType)
  }

  return (
    <div className="app bg-slate-300 flex justify-center items-center">
      <div className="box w-1/2 h-96 p-4 bg-slate-800 rounded-md flex flex-col justify-center items-center">
        <Input 
          label="From" 
          type={fromType} 
          setType={setFromType} 
          isDisable={false} 
          text={from} 
          setText={setFrom} 
          options={options} 
        />
        
        <button 
          onClick={swap} 
          className="bg-blue-600 text-white w-1/4 h-12 rounded-md" 
        >
          SWAP
        </button>
        
        <Input 
          label="To" 
          type={toType} 
          setType={setToType} 
          isDisable={true}  
          text={to} 
          setText={setTo} 
          options={options} 
        />

        <button 
          onClick={convert} 
          className="bg-blue-600 text-white w-1/2 h-12 mt-6 rounded-md" 
        >
          Convert {fromType} to {toType} 
        </button>
      </div>
    </div>
  )
}

export default App
