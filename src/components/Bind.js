import React from 'react'

class component
//frst approach to bind
constructor(){
    this.punishment=this.punishment.bind(this);
}
punishment(){
    alert()
}
<button onClick={this.punishment}>strict</button>

//second
punishment(){
    alert()
}
<button onClick={this.punishment.bind(this)}>strict</button>

//third
punishment(){
    alert()
}
<button onClick={()=>this.punishment()}>strict</button>

//four
punishment(){
    alert()
}
<button onClick={this.punishment}>strict</button>
