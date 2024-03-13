
import React,{Component} from "react";
import {useState } from "react";
import './../styles/App.css';
// import Counter from "./components/Counting";
const App = () => {
const [count,setCount]=useState(0)
  const add=()=>{
  setCount(count+1);
  }
  return (
    <div>      
       {/* <Counter/> */}
       <p>Button clicked {state} times</p>
       <button onClick={add}>Click me</button>
    </div>
  )
}


