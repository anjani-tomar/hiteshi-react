import React, { Component } from 'react'
import Class2 from './Class2';

export default class Classcomponents extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

    }
    counter(){
      this.setState({count : this.state.count + 1})
    }
     
    componentDidMount(){
        // console.log("componentDidMount");
    }
    componentWillUnmount(){
        // console.log(" component will remove");
    }
    
  render() {
    return (
      <div className=' p-40 text-center'>
       <Class2 number={this.state.count}></Class2>
        <button onClick={()=>{this.counter()}} className='p-2 rounded-md border-emerald-50 bg-zinc-700 hover:bg-zinc-800 '>Click me</button>
      </div>
    )
  }
}
