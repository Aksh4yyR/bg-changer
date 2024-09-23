import React, { Component } from 'react'

export default class car extends Component {

constructor()
{
  super()   //parent class properties wok\rking use super
  this.state ={
    carName:"demo car"
  }                                     //state is parent component

}
updateUsername(car)
{
this.setState({carName:car})
}

  render() {
    return (
      <div className='container m-5 border rounded text-center p-5'>
        <h1>Inside car component</h1>
        <input onChange={e=>this.
          updateUsername(e.target.value)} placeholder='input your favourite car' type="text" className='form-control m-5 w-75' />
        <h1>My car is: <span className='text-danger'>{this.state.carName}</span> </h1>
        
      </div>
    )
  }
}
