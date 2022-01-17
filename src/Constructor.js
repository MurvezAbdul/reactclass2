
import {Component} from 'react'
class Constructor extends Component{
    m=()=>{
        alert();
    }
render(){
    return(
        <div>
            <button onClick={this.m}>submit</button>
        </div>
    )
}
}
export default Constructor