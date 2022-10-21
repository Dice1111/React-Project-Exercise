import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <img src ={this.props.profilePictureSrc} />
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

Profile.defaultProps={
    profilePictureSrc:"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    name:"Dice"
}
