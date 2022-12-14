import "./EntityPopup.css";
import AddNote from "./AddNote/AddNote";
import React, { useEffect ,useState,useRef} from "react";

export default function EntityPopup({event}){
    const[notes,setNotes] = useState([]);
    const[addNote,setAddNote] = useState(false);

    useEffect(()=>{
            console.log(event);
            setNotes(event.notes);
    },[])

    function AddNotePopUp(){
        setAddNote(current =>!current);
    }

    return(
        <div className="modal">
            <p>Id: {event.id}</p>
            <p>Country: {event.country}</p>
            <p>Company: {event.company}</p>
            <p>Object type: </p>
            <p>----------------------------------------------------------------------------------------------------------------------------</p>
            <p>Notes</p>
            <p>----------------------------------------------------------------------------------------------------------------------------</p>
            <span>
                <button id="addNote1" onClick={AddNotePopUp} >+</button>
                <span id="addNote">{addNote ? <AddNote event={event.id}/> : null}</span>
            </span>
            
            <p>{notes.map(n=><ul key={n} id="note">{n}</ul>)}</p>
            <button id="deleteButton">Delete Object</button>
        </div>
    )
}