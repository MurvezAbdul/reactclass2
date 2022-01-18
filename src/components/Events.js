
import {Component} from 'react'
class Events extends Component{
    state={
        username:"",
        password:""
    }
    action=()=>{
        this.setState({
            username:"new user",
            password:"amazon"
        })
        
    }
render(){
    return(
        <div>
            <h1>event</h1>
            <p>Username:{this.state.username}</p>
            {/* <p>Password:{this.state.password}</p> */}
            <input value={this.state.password} />  
            <button onClick={this.action}>submit</button>
        </div>
    )
}
}
export default Events