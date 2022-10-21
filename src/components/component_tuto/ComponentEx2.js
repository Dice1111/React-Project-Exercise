import React, { Component } from 'react'
import ComponentEx3 from './ComponentEx3';

export default class ComponentEx2 extends Component {
  render() {
    const integer = 3.142;
    const rInteger = Math.round(integer);
    return (
      <div>
        {rInteger}
        <ComponentEx3/>
      </div>
    )
  }
}
