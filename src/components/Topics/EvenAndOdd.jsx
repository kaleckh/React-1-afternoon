import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      evenArray: [],
      oddArray: [],
      userInput: ""
    }
  }

  sort() {
    var nums = this.state.numbers;
    var even = [];
    var odd = [];

    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      if(element % 2 === 0) {
        even.push(element)
      }else{
        odd.push(element)
      }      
    }
    this.setState({
      evenArray: even,
      oddArray: odd
    })
  }

  render() {
    return (      
        <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input 
            onChange={event => this.setState({
              userInput: event.target.value
            })}
            className="inputLine"
          />
          <button className="confirmationButton"
            onClick={()=> this.sort()}
          ></button>
          <span className="resultsBox">
            {this.state.evenArray}
          </span>
          <span className="resultsBox">
            {this.state.oddArray}
          </span>
        </div>
      )
  }
}

export default EvenAndOdd;
