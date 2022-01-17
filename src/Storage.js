import React from 'react'

// class Storage extends React.Component{
//   state={
//       name:"murvez"
//   }
//   render(){
//     //   alert(this.state.name);
//       setTimeout(()=>{
//           this.setState({
//               name:"bhanu"
//           })
//       },3000)
//       return(
//           <div>
//               {this.state.name}
//           </div>
//       )
//   }
// }

class Storage extends React.Component{
    render(){
        // return(
        //     <div id="m">
        //         <h1>using jsx</h1>
        //     </div>
        // )
        return React.createElement("div",{id:"d",className:"m"},
        React.createElement("h1",null,"javascript"))
    }
}
export default Storage