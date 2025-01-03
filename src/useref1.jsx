
import { useRef } from "react"
function Useref1() {
    let use1=useRef("");
    let display=(e)=>{
        use1.current=e.target.value;
        console.log(use1.current);
    }
  return (
    <input type="text" onChange={(e)=>{
        display(e);
        }}/>
  )
}


export default Useref1