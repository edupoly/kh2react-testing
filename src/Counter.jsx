import React, { useState } from 'react'

function Counter({initialCount=0}) {

  const [count, setCount] = useState(initialCount)
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }
  return (
    <div className='border border-success p-2 m-2'>
      <h1>Counter</h1>
      <button onClick={dec}>Decrement</button>
      {count}
      <button onClick={inc}>Increment</button>
    </div>
  )
}

export default Counter