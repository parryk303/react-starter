import React, { Component } from "react";

class FormInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.submitValue = this.submitValue.bind(this);
  }

  handleInput(e) {
    this.setState({userInput: e.target.value});
  }

  submitValue(e) {
    e.preventDefault();
    this.props.fn(this.state.userInput);
    this.setState({userInput: ""});
  }

  render() {
    return (
      <form className="p2-t">
        <input
          className="p0-a"
          type="text"
          placeholder={this.props.placeholderText}
          value={this.state.userInput}
          onChange={this.handleInput}/>

        <button
          className={`p0-a ${this.props.btnClass ? this.props.btnClass : "" }`}
          onClick={this.submitValue}
        >{this.props.btnText}</button>
      </form>
    );
  }
}

export default FormInput;