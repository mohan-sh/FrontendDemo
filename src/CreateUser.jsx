

import axios from 'axios'
import { useState } from 'react'

function CreateUser() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[address,setAddress]=useState("")

  const submit=(e)=>{

    e.preventDefault()
    axios.post('https://backenddemo-jvrm.onrender.com/api/user/create',{name,email,address})
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  return (
    <>
    <form onSubmit={submit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text"  onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder="Enter your name"/>
        </div>
        <div>
            <label htmlFor="mail">Email</label>
            <input type="text"    onChange={(e)=>setEmail(e.target.value)} name="email" id="mail" placeholder="Enter your email"/>
        </div>
        <div>
            <label htmlFor="add">Address</label>
            <input type="text"  onChange={(e)=>setAddress(e.target.value)}  name="name" id="add" placeholder="Enter your Address"/>
        </div>
        <button type="submit">Create</button>
    </form>
    
    </>
  )
}

export default CreateUser