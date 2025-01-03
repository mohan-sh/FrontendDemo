
import { useEffect, useRef, useState } from "react";
export const HookUseState1 = (props) => {
    let[name,setName]=useState("");
    let[number,setNumber]=useState(10);
    useEffect(() => {
        console.log("useEffect");
    }, [number]);
        
    let use1=useRef(0);
    let increament=()=>{
        
        console.log(use1.current++);
    }
    
  return (
    <>
    <div>
        <label htmlFor=""></label>
        <input type="text"  value={name}/>
    </div>
    <div>
        <label htmlFor=""></label>
        <input type="text"  value={name} onChange={(e)=>{
            setName(e.target.value);
        }}/>
    </div>
    <h1>number:{number}</h1>
    <button onClick={()=>setNumber(number+props.value)}>add</button>
    <button onClick={()=>increament()}>useRef</button>

    </>
  )
}
