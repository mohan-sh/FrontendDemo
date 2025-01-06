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
    <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>User</h1>
    <Link to="/create" style={{ display: 'block', marginBottom: '20px', color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
        Create User
    </Link>

    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto', maxWidth: '800px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <thead>
            <tr style={{ backgroundColor: '#007BFF', color: 'white' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Address</th>
                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Action</th>
            </tr>
        </thead>
        <tbody>
            {user.map((users, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{users.name}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{users.email}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{users.address}</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                        <Link to={`/update/${users._id}`} style={{ marginRight: '10px', color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
                            Update
                        </Link>
                        <button
                            onClick={() => deleteUser(users._id)}
                            style={{
                                padding: '5px 10px',
                                color: 'white',
                                backgroundColor: '#d9534f',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s ease',
                            }}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</>

  )
}

export default User