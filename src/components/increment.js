import React,{Component} from 'react'


class S extends Component{
   constructor(props){
    super(props);
    this.state={count:0};
   } 
 
   counter=()=>{
    const curr=this.state.count;
    this.setState({count:curr+1});
   }
   render(){
 return(
<>
<p>Button clicked {this.state.count} times</p>
   <button onClick={this.counter}>Click me</button>
   </>
 )  
   };
}

export default S;