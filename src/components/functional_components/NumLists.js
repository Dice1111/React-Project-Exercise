import React from 'react'

export default function NumLists(props) {

    const numbers = props.numbers;
    const ListItems = numbers.map((number,index)=>
    <li key={index}>{number}</li>
    )
  return (
    <div>
        <hr></hr>
        <ul >{ListItems}</ul>
    </div>
  )
}
