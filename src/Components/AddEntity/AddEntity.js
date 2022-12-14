import React,{useState} from 'react';
import axios from 'axios';
import "./Test.css"

function AddEntity() {

    async function test(event){
      if(event.target.value === "Submit"){
        console.log(event);
        console.log(event.target.value);
        console.log(event.target.form.company.value);
        console.log(event.target.form.country.value);
        console.log(event.target.form.name.value);
    
        axios.post('http://localhost:8080/createproduct',{
          name: event.target.form.name.value,
          company: event.target.form.company.value,
          country: event.target.form.country.value
        });
      }
  

    }

    return(
      <header className="App-header">
          <div className="addEntity">
            <form id="form">
              <div className="inputRow">
                <label className="inputLabel">Name</label>
                <input type="text" className="inputText" id="name"></input>
              </div>

              <div className="inputRow">
                <label className="inputLabel">Company</label>
                <input type="text" className="inputText" id="company"></input>
              </div>

              <div className="inputRow">
                <label className="inputLabel">Country</label>
                <input type="text" className="inputText" id="country"></input>
              </div>

              <input id="submitButton" type="button" onClick={test} value="Submit"></input>
            </form>
          </div>
        </header>
    )
}

export default AddEntity;
  