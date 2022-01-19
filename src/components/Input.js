import React from 'react'
class Input extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
        // this.send=this.send.bind(this);
    }
    send=()=>{
        console.log(this.state.username)
        console.log(this.state.password)
        this.setState({
            username:"",
            password:""
        })
    }
    handleUserName=(m)=>{
        // console.log(m)
        this.setState({
            [m.target.name]:m.target.value 
            
        })
    }
    // using two diff function names
    //         handlePassword=(m)=>{
    //          this.setState({
    //              password:m.target.value
    //          })
    //      }   
    render(){
        return(
            <div>
               <input type="text" name="username" value={this.state.username} placeholder="enter username" onChange={this.handleUserName}/>
            
               <input type="text" name="password" value={this.state.password} placeholder="password" onChange={this.handleUserName}/>
               <button onClick={this.send}>send</button>   
                {/* <p>password:{this.state.password}</p> 
            <h1>username from input field</h1>
            <p>username:{this.state.username}</p>   */}
            </div>
        )
    }
}
export default Input