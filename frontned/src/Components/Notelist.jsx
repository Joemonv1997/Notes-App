import React from 'react'

const Notelist = ({key,note}) => {
    const onSubmitHandler=(id)=>{
        
        const getNotes=async()=>{
            const response=await fetch(`/api/note/${id}`)
            const data=await response.json()
            console.log(data);
    
        }
        getNotes()
    }
  return (
    <div>
        <div key={key}>
        <h1>{note.title}</h1>

        <button onClick={()=>onSubmitHandler(note.id)}>View</button>

        </div>
    </div>
  )
}

export default Notelist