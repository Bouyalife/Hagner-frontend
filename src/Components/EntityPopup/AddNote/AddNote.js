import axios from "axios"
import React,{useState,useEffect} from "react";

export default function AddNote(event) {

    const[currentId,setId] = useState();
    useEffect(()=>{
        console.log(event.event);
        setId(event.event);
    },[])

   function submitNote(event){      
        if(event.key == "Enter"){
            axios.post("http://localhost:8080/addNotes",{
                note: event.target.value,
                id : currentId
            });
            window.location.reload(false);
        }
   }
    
    return(
        <div>
            <input type="text" id="inputText" size={85} onKeyUp={submitNote}/>
        </div>
    )
}