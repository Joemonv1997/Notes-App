import React,{useState,useEffect} from 'react'
import UserList from '../Components/UserList'

const UserListPage = () => {
    const [allusers,SetAllusers]=useState([])
    useEffect(() => {
      getUsers()
    }, [])
    const getUsers=async()=>{
        const response=await fetch("/api/users")
        const data=await response.json()
        SetAllusers(data)

    }
  return (
    <div>
        <h1>UserListPage</h1>
        {
        allusers.map((user,index)=>{return(
            <UserList key={index} user={user}/>
        )})
    }
        
        
    </div>
  )
}

export default UserListPage