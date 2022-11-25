import React, { Component } from 'react'

    export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            essay:'Write Something',
            option:'banana'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEssayChange = this.handleEssayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleNameChange(e){
        this.setState({
            value: e.target.value
        });
    }

    handleEssayChange(e){
        this.setState({
            essay: e.target.value
        });
    }

    handleOptionChange(e){
        this.setState({
            option: e.target.value
        });
    }

    handleSubmit(e){
        alert("A name was submitted: " + this.state.value + "\n" + this.state.essay + "\n" + this.state.option);
        e.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleNameChange}></input>
        </label>
        <br></br>
        <label>
            Essay:
            <textarea value={this.state.essay} onChange={this.handleEssayChange}></textarea>
        </label>
        <br></br>
        <label>
            Choose your fruit:
            <select value={this.state.option} onChange={this.handleOptionChange}>
                <option value="grapefruit">grapefruit</option>
                <option value="banana">banana</option>
                <option value="watermelon">watermelon</option>
            </select>
        </label>
        <br></br>
        <input type='submit' value='submit'></input>
      </form>
    )
  }
}
