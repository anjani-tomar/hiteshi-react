import React, { Component } from 'react'

export default class Class2 extends Component {
    componentDidUpdate(prevprops,prevstate){
     
if(prevprops.number !== this.props.number){
//    console.log("componentDidUpdate :  updated   " + this.props.number);
}
      
    }

  render() {
    return (
      <div>
            <span>{this.props.number}</span><br />
      </div>
    )
  }
}
