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
      axios.put(`https://backenddemo-jvrm.onrender.com/api/user/update/${id}`,{name,email,address})
      .then((res)=>{
        console.log(res.data)
      })
    }

  return (
    <>
   <form onSubmit={updateUser} style={{ width: '100%', maxWidth: '400px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
    <div style={{ marginBottom: '15px' }}>
        <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Enter your name" 
            style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
    </div>
    <div style={{ marginBottom: '15px' }}>
        <label htmlFor="mail" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="mail" placeholder="Enter your email" 
            style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
    </div>
    <div style={{ marginBottom: '15px' }}>
        <label htmlFor="add" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="address" id="add" placeholder="Enter your Address" 
            style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
    </div>
    <button type="submit" style={{ width: '100%', padding: '12px', fontSize: '16px', color: 'white', backgroundColor: '#007BFF', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
        Update
    </button>
</form>

    </>
  )
}

export default UpdateUser