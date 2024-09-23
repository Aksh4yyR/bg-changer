import React,{useEffect,useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000);
    },[count])
  return (
    <div style={{height:"300px"}} className='d-flex justify-content-center align-items-center border border-dark rounded p-5 m-5'>
        <div className="text-center">
            <h1>Counter APP</h1>
            <h1 style={{fontSize:"80px"}} className="text-danger">{count}</h1>
        </div>
    </div>
  )
}

export default Counter
