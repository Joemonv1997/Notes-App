import React from 'react'

const Notelist = ({key,note}) => {
    const onSubmitHandler=(id)=>{
        
        const getNotes=async()=>{
            const response=await fetch(`/api/note/${id}`)
            const data=await response.json()
    
        }
        getNotes()
    }
  return (
    <div>
        <div key={key}>
        <h1>{note.title}</h1>

        </div>
    </div>
  )
}

export default Notelist