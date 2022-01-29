import {Routes,Route} from "react-router-dom"
import React from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import Navigation from "./components/Navigation"
import Signup from "./components/Signup"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "./components/firebaseConfiguration"


class App extends React.Component{
  state={
    authUser:""
  }
  componentDidMount(){
    onAuthStateChanged(auth,(currentUser)=>{
      this.setState({
        authUser:currentUser
      })
    })
  }
  render(){
    return(
      <div>
        <Navigation/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        </Routes>
            {
              this.state.authUser?<Home/>:<Login/>
            }
        </div>
    )
  }
}
export default App
