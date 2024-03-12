import React from "react";

class Incremnt extends Components{
    constructor(props){
      super(props);
      this.state={count:0};
    }
     
    increment=()=>{
    const curr=this.state.count;
    this.setState({count:curr+1});
    }
    render(){
      return (
            <div>
           <p>Button clicked {this.state.count} times</p>
             <button onClick={this.increment}>Click me</button>  
            </div>
          ) 
    }
  }
  export default Incremnt;