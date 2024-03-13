import React,{Component} from "react"


import {useState } from "react";
import './../styles/App.css';
// import Counter from "./components/Counting";
const Comps = () => {
const [count,setCount]=useState(0);
  const add=()=>{
  setCount(count+1);
  }
  return (
       
<>
<p>Button clicked {count} times</p>
<button onClick={add}>Click me</button>
</>
      
  
  );
}

export default  Comps;