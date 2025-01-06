import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './User.css'; // If it's in the same directory
import axios from 'axios'

function User() {

    const[user,setUser]=useState([])
    useEffect(()=>{
        axios.get("https://backenddemo-jvrm.onrender.com/api/user/fetch")
        .then((res)=>{
            console.log(res.data.user1)
            setUser(res.data.user1)
        })
    },[])

    const deleteUser=(id)=>{
        axios.delete(`https://backenddemo-jvrm.onrender.com/api/user/delete/${id}`)
        .then(()=>{
            console.log("user deleted successfully")
        })
        .catch((err)=>{
            console.log(err)
        })
        
        

    }
  return (
   <>
   <h1>User</h1>
   <Link to="/create">Create User</Link>

   <table >
    <thead >
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {user.map((users,index) => {
         return(
            <tr key={index}>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.address}</td>
                <td>
                    <Link to={`/update/${users._id}`}>update</Link>
                    <button onClick={()=>{
                        deleteUser(users._id)
                    }}>Delete</button>
                </td>
            </tr>
        )
    }
        )}
    </tbody>
   </table>
   </>
  )
}

export default User