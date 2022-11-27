import React, { Component } from "react";

export default class Conditioncheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }
  handleLoginClick() {
    this.setState({
      isLogIn: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLogIn: false
    });
  }

  render() {
    const isLogIn = this.state.isLogIn;
    let button;

    if (isLogIn) {
        button = <LogOutButton onClick={this.handleLogoutClick} />;
    } else {
        button = <LogInButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <h1>Condition Check</h1>
        <Greeting isLogIn={isLogIn} />
        {button}
      </div>
    )
  }
}

// Greeting
function UserGreeting(props) {
  return <h1>Welcome.</h1>;
}
function GuestGreeting(props) {
  return <h1>Please Sign Up.</h1>;
}

//Greeting Check
function Greeting(props) {
  const isLogIn = props.isLogIn;
  if (isLogIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

//Button
function LogInButton(props) {
    return (<button onClick={props.onClick}>Login</button>)
}
function LogOutButton(props) {
  return (<button onClick={props.onClick}>Logout</button>)
}
