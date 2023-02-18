import React, { useEffect, useState } from "react";
import Notelist from "../Components/Notelist";

const NoteListPage = () => {
  const [allnote, SetAllnotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    const response = await fetch("/api/notes");
    const data = await response.json();
    SetAllnotes(data);
  };

  return (
    <div>
      {allnote.length === 0 ? (
        <h1>No Note Available</h1>
      ) : 
        allnote.map((not, index) => {
          return <Notelist key={index} note={not} />;
        })
      }
    </div>
  );
};

export default NoteListPage;
