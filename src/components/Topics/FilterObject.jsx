import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: ["cup", "computer", "phone"],
      userInput: "",
      filteredArray: [],
    };
  }
  solved(){
      var array =this.state.unFilteredArray;
      var userInput = this.state.userInput;
      var filteredArray = array.filter(function(element) {
        if(element.indexOf(userInput) > -1) {
            return true;
        } else {
            return false;
        }
      }) 
      this.setState({
          filteredArray: filteredArray
      })
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>FIlter Object</h4>
        <span className="puzzleText"></span>
        <input
          onChange={(event) =>
            this.setState({
              userInput: event.target.value,
            })
          }
          className="inputLine"
        />
        <button
          onClick={() => this.solved()}
          className="confirmationButton"
        ></button>
        <span className="resultsBox filterObjectRB">
            {this.state.filteredArray}
        </span>
      </div>
    );
  }
}
