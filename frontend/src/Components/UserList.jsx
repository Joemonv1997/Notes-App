import React from 'react'

const UserList = ({key,user}) => {
    const onSubmitHandler=(id)=>{
        console.log(id);
        const getUsers=async()=>{
            const response=await fetch(`/api/user/${id}`)
            const data=await response.json()
            console.log(data);
    
        }
        getUsers()
    }
  return (
    <div>
        <div key={key}>
        <h1>{user.username}</h1>

        <button onClick={()=>onSubmitHandler(user.id)}>View</button>

        </div>
    </div>
  )
}

export default UserList