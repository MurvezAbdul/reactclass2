import React from 'react'
import Initial from './Initial'
export default class Create extends React.Component{
    state={
        name:"ReactJS",
        gender:"Female",
        year:2022,
        employee:[{id:1,name:"murvez"},{id:2,name:"bhanu"}]
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Name is:{this.state.name}</h1>
                <h2>gender is:{this.state.gender}</h2>
                <pre>
                    create component
                </pre>
                <Initial ob={this.state.name}/>
                <div>
              <h1>employee details</h1>
              <p>
                  <span>{this.state.employee[0].id}</span>
                  <span>{this.state.employee[0].name}</span>
                  <span>{this.state.employee[1].id}</span>
                  <span>{this.state.employee[1].name}</span>
              </p>
            </div>
            </div>
            
        )
    }
}