import React,{useState} from "react";
import axios from "axios";
import "./Search.css";
export default function Search(){

    const [gottenEntity,setGottenEntity] = useState();

    async function test(event) {
        console.log(event.target.id);
        event.preventDefault();

        if(event.target.id === 'idSearch'){
            console.log("tetstst");
            console.log(event.target.form.idSearch.value);
            const resp = await axios.get('http://localhost:8080/getentity?id='+event.target.form.idSearch.value);
            console.log(resp);
            console.log(resp.data.country);
            console.log(resp.data.company);
            document.getElementById("searchedEntity").style.display = "inline";
            setGottenEntity(resp.data.id + " " + resp.data.country + " " +resp.data.name + " " + resp.data.company);
        }
    }
    
    return(
        <div className="allEntities">
            <div className="getEntity">
                <form id="form2">
                <input type="text" id="idSearch" onChange={test}></input>
                </form>
            </div>
            <div id="searchedEntity">
                {gottenEntity}
            </div>
        </div>
    )
}