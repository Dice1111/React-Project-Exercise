import React, { Component } from 'react'

export default class ComponentEx4 extends Component {
  render() {
    const {firstName,age } = this.props; 
    return (
      <div>
        <h1>Component Ex4</h1>
        <h3>Hi there. I am {firstName}.</h3>
        <h3>My age is {age}.</h3>
      </div>
    )
  }
}
