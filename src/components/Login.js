import React,{Component} from 'react';
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth } from "./firebaseConfiguration"

class Login extends Component{
    state={
        username:"",
        password:""
    }
    handleChange=(l)=>{
        this.setState({
            [l.target.name]:l.target.value
        })
    }
    handleClick=()=>{
        signInWithEmailAndPassword(auth,this.state.username,this.state.password)
        .then((user)=>{
            console.log(user)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        return(
            <div>
                <input type="text" placeholder='enter username' onChange={this.handleChange} name="username" value={this.state.username}/>
                <input type="password" placeholder="enter password" onChange={this.handleChange} name="password" value={this.state.password}/>
                <button onClick={this.handleClick}>Log In</button>
            </div>
        )
    }
}
export default Login