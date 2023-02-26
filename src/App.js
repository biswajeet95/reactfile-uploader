import { Axios } from "axios";
import React, { useState } from "react";
import './App.css';
import FormInput from "./FormInput";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  })
  const submited = (e) => {
    e.preventDefault()
    const dataToSubmit = {
      name:data.name,
      email:data.email,
      number:data.number,
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(dataToSubmit)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
    console.log(data)
  }
  const handle = (e) => {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    //console.log(newdata)
  }
  return (
    <div className="App">
      <form onSubmit={submited}>
        {/* <FormInput placeholder="username"/>
        <FormInput placeholder="Email"/>
        <FormInput placeholder="fullname"/>
        <FormInput placeholder=" 5th else"/> */}

        <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text" />
        <input onChange={(e) => handle(e)} id="email" value={data.email} placeholder="email" type="email" />
        <input onChange={(e) => handle(e)} id="number" value={data.number} oplaceholder="number" type="tel" />
        <button type="submit">submit</button>
      </form>

    </div>
  );
}

export default App;
