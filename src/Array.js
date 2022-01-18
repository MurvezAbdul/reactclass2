import React,{Component} from 'react'

class Array extends Component{
    state={
        cartoon:[{bikes:"royal enfield",color:"black",fruits:"apple"}],
        spiderman:"toby maguire",
        ironman:"robert downey",
        wonderwomen:"galgadot"
    }
    render(){
        //line from app.js
        const{name,age}=this.props;
        console.log("displaying from props",this.props)
        //from state
        console.log("displaying out of array",this.state)
        const{ironman,wonderwomen}=this.state;
        console.log(ironman,wonderwomen)
        //from array in the state
        console.log("array cartoon",this.state.cartoon)
        const{color,fruits}=this.state.cartoon[0];
        console.log(color,fruits)
        return(
            <div>
                <p>{name} {age}</p>
                <p>{color} {fruits}</p>
                
            </div>
        )
    }
}
export default Array