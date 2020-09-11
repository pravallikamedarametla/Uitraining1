import React,{Component} from 'react';


export class LoginComponent extends Component{
    constructor(){
       super();
       this.state={
           username:"",
           password:""
       }
    }

handleInputchange=(e)=>{
    console.log(e.target.value);
    let currentState = this.state;
    currentState[e.target.name]=e.target.value;
    this.setState(currentState);
}

    render(){
        return <div>
            <h1>Login</h1>
            <input type="text" name="username" onChange= {this.handleInputchange}/>
    <h1>{this.state.username}</h1>
        </div>
    }
}