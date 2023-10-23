import React from 'react'

function Input({label , isDisable , type ,setType , text , setText , options}) {
  return (
    <div className='bg-red-300 w-5/6 h-20 rounded-md my-2 p-2 flex justify-around items-center'>
          <label className=''>{label}</label>
          <input 
            type="number" 
            disabled={isDisable}
            value={text}
            onChange={e => setText(e.target.value)}
            className='w-1/5 h-10 bg-orange-300 m-2' 
          />
          
          <label className='ml-4'>Currency Type</label>
          <select 
            id='currency'
            value={type} 
            onChange={e => setType(e.target.value)}
            className='w-1/5 h-10 bg-blue-300 m-2'
          >
            {options.map((el,index) => <option key={index} value={el} >{el}</option>)}

          </select>
    </div>
  )
}

export default Input