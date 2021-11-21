import React, { Component } from "react";
import '../css/calc.css';

class Button extends Component {
  render() {
      return (
          <div className={`column-${this.props.cols}`}>
              <button className="calc-button" onClick={this.props.action} id={`calc-btn-${this.props.id}`}>
                  {this.props.symbol}
              </button>
          </div>
      )
  }
}

class Calc extends Component {

  constructor(props) {
    super(props);
      this.state = {
        inputField: '0',
        calcBuffer: [],
        inputIsOperator: false,
        totalDisplayed: false,
        buttons: {
          0: {symbol: "C", cols: 3, isOperator: true},
          1: {symbol: "÷", cols: 1, isOperator: true},
          2: {symbol: "7", cols: 1, isOperator: false},
          3: {symbol: "8", cols: 1, isOperator: false},
          4: {symbol: "9", cols: 1, isOperator: false},
          5: {symbol: "x", cols: 1, isOperator: true},
          6: {symbol: "4", cols: 1, isOperator: false},
          7: {symbol: "5", cols: 1, isOperator: false},
          8: {symbol: "6", cols: 1, isOperator: false},
          9: {symbol: "-", cols: 1, isOperator: true},
          10: {symbol: "1", cols: 1, isOperator: false},
          11: {symbol: "2", cols: 1, isOperator: false},
          12: {symbol: "3", cols: 1, isOperator: false},
          13: {symbol: "+", cols: 1, isOperator: true},
          14: {symbol: "+/-", cols: 1, isOperator: false},
          15: {symbol: "0", cols: 1, isOperator: false},
          16: {symbol: ".", cols: 1, isOperator: false},
          17: {symbol: "=", cols: 1, isOperator: true},
        }
    }
  }

  reset = () => {
    this.setState({inputField: '0', calcBuffer: [], inputIsOperator: false});
  }

  onKeyClick = (btn) => {
    const button = this.state.buttons[btn.target.id.split("-")[2]];
    if (button.isOperator) {
      this.operatorHandler(button);
    }
    else {
      this.numberHandler(button);
    }
  }

  numberHandler = (button) => {
    
    let newVal = '0';
    if (!this.state.inputIsOperator) {
      newVal = this.state.inputField;
    } 
    else if (this.state.totalDisplayed & button.symbol==="+/-") {
      newVal = String(this.state.inputField);
    }

    switch(button.symbol) {
      default:
        if (newVal==='0'){
          this.setState({inputField: button.symbol, inputIsOperator: false});
        }
        else {
          this.setState({inputField: newVal + button.symbol, inputIsOperator: false});
        }
        break;
      case ".":
        if (newVal.indexOf(".")===-1) {
          if (this.state.inputIsOperator) {
            this.setState({inputField: '0' + button.symbol, inputIsOperator: false});
          }
          else {
            this.setState({inputField: newVal + button.symbol, inputIsOperator: false});
          }
        }
        break;
      case "+/-":
        if ((!this.state.inputIsOperator || this.state.totalDisplayed) && parseFloat(newVal)!==0) {
          if (newVal.indexOf("-")===-1) {
            this.setState({inputField: '-'+newVal, inputIsOperator: false});
          }
          else {
            this.setState({inputField: newVal.replace("-",""), inputIsOperator: false});
          }
        }
        break;
    }

    this.setState({totalDisplayed: false});

  }

  operatorHandler = (button) => {
    switch(button.symbol) {
      default:
        if (!this.state.inputIsOperator || this.state.totalDisplayed) {
          this.state.calcBuffer.push(this.state.inputField);
          this.state.calcBuffer.push(button.symbol);
          this.setState({inputIsOperator: true, totalDisplayed: false});
        }
        else {
          let newBuffer = this.state.calcBuffer.slice();
          newBuffer.pop();
          newBuffer.push(button.symbol);
          this.setState({calcBuffer: newBuffer.slice()})      
        }
        break;
      case "C":
        this.reset();
        break;
      case "=":
        this.calculate();
        break;
    }
  }

  calculate = () => {
    let {inputField, calcBuffer} = this.state;
    if (calcBuffer.length>=2) {
      if (this.state.inputIsOperator) {
        calcBuffer.pop();
      } 
      else {
        calcBuffer.push(inputField);
      }

      let total = parseFloat(calcBuffer.shift());
      while (calcBuffer.length>0) {
        const operator = calcBuffer.shift();
        const operand = parseFloat(calcBuffer.shift());
        // eslint-disable-next-line default-case
        switch (operator) {
          case "+":
            total += operand
            break;
          case "-":
            total -= operand
            break;
          case "x":
            total *= operand
            break;
          case "÷":
            total /= operand
            break;
        }

      }
      this.setState({inputField: total, inputIsOperator: true, totalDisplayed: true});
    }
  }

  render() {

    return (
        <div className="calculator">
          <div className="screen">
            {this.state.calcBuffer.length>-1 
              ? <div className="input-list">&nbsp;{this.state.calcBuffer.join(" ").slice(-35)}</div>
              : null
            }
            <div className="result">{this.state.inputField}</div>
          </div>
          <div className="keypad">
          {
            Object.keys(this.state.buttons).map((btn) => {
              return <Button id={`${btn}`} key={`${btn}`} symbol={this.state.buttons[btn].symbol} cols={this.state.buttons[btn].cols} action={this.onKeyClick} />
            }

            )
          }
          </div>
        </div>
    )
  }
}

export default Calc;
