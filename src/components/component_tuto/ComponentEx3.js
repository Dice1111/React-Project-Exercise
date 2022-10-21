import React, { Component } from 'react'

const seaObject = {
    src:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    alt:"Image Title",
    name:"Image Object",
    width:"100%"
}

export default class ComponentEx3 extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>{seaObject.alt}</li>
            <li>{seaObject.name}</li>
        </ul>
        <img src ={seaObject.src} alt={seaObject.alt} width={seaObject.width}/>
      </div>
    )
  }
}
