import React,{Component} from "react"


class Counter extends Component{

    constructor(props){
      super(props);
      this.state={count:0};
    }

     adding=()=>{
    let curr=this.state.count;
    this.setState({count:curr+1});
    }
    render(){
   <>
   <p>Button clicked {this.state.count} times</p>
   <Button onClick={adding}>Click me</Button>
   </>
    }

}

export default Counter;