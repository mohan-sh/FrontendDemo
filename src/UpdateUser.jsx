import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

function UpdateUser() {

  const {id} = useParams()
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[address,setAddress]=useState()


    const updateUser=(e)=>{
      e.preventDefault()
      axios.put(`http://localhost:3000/api/user/update/${id}`,{name,email,address})
      .then((res)=>{
        console.log(res.data)
      })
    }

  return (
    <>
    <form onSubmit={updateUser}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} name="name" id="name" placeholder="Enter your name"/>
        </div>
        <div>
            <label htmlFor="mail">Email</label>
            <input type="text" value={email}   onChange={(e)=>setEmail(e.target.value)} name="email" id="mail" placeholder="Enter your email"/>
        </div>
        <div>
            <label htmlFor="add">Address</label>
            <input type="text" value={address}  onChange={(e)=>setAddress(e.target.value)}  name="name" id="add" placeholder="Enter your Address"/>
        </div>
        <button type="submit">Update</button>
    </form>
    </>
  )
}

export default UpdateUser