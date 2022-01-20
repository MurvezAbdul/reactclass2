 import React,{PureComponent} from 'react' //  purecomponent doesnt render multiple times if there is any change in data then only it will re-render

class Regular extends PureComponent{
    constructor(){
        super();
        this.state={
            choice:"Murvez"
        }
    }
    componentDidMount(){
        this.setState({
                choice:"rvez"  //change in data so renders two times
            })
    } 
    render(){
        console.log("from reg comp")
        return(
            <div>
                <p>{this.state.choice}</p>
            </div>
        )
    }
}
export default Regular