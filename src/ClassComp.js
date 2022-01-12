import React,{Component} from 'react'

// class ClassComp extends Component{
//     render(){
//         console.log("console",this.props.name)
//         return(
//             <div> 
//                 <p>class component</p>
//             </div>
//         )
//     }
// }

function ClassComp(props){
    console.log(props.age)
    return (
        <div>
            <p>Functional component</p>
        </div>
    )
}
export default ClassComp;