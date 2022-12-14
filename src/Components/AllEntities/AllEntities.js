import React,{useEffect, useState,useRef} from "react";
import axios from "axios";
import "./AllEntities.css";
import EntityPopup from "../EntityPopup/EntityPopup";

export default function AllEntities(){

    const [allGottenEntitites,setAllEntities] = useState([]);
    const [popUpState,setPopUpState] = useState(false);
    const [test1,setTest] = useState();
    const popUpRef = useRef(null);
    const test12 = useRef(null);

    useEffect(()=>{
        document.body.addEventListener("click",onClickOutside);
        async function fetchData(){
            const resp = await axios.get('http://localhost:8080/getallentities');
            setAllEntities(resp.data);
            console.log(resp.data);
        }
        fetchData();
    },[]);

    function onClickOutside(e) {
        if(test12.current && !test12.current.contains(e.target)){
            setPopUpState(false);
        }
    }

    function test(event){
        setPopUpState(true);
        setTest(event);
        console.log(event.id);
    }

    return(
        <div id="wholePage" ref={test12}>
            <div className="popUp" ref={popUpRef}>
            </div>
            {allGottenEntitites.map((entities)=>(<div  id="allEntities" onClick={()=>{test(entities)}}><p id="p">ID: </p>{entities.id}<p id="p">Product Name: </p>  {entities.name}<p id="p">Company Name: </p>{entities.company}</div>))}
            <div className="popUp" ref={popUpRef}>
                {popUpState ? <EntityPopup event={test1} /> : null}
            </div>
          </div>
    )
}
