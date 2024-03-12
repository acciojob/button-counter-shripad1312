import {Component} from 'react';

class Incremnt extends Component{
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
            <>
           <p>Button clicked {this.state.count} times</p>
             <button onClick={this.increment}>Click me</button>  
            </>
          ) 
    }
  }
  export default Incremnt;