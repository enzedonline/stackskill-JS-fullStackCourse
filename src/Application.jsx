import React, { Component } from "react";
import HighScore from "./HighScore"
import './css/style.css'

class Application extends Component {
  constructor(props) {
    super(props);
        this.state = {
            count: 0,
            overTen: false
        };
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    resetCount = (e) => {
        this.setState({count: 0})
        this.setState({overTen: false})
    }

    componentDidUpdate(props, state) {
        if (this.state.count > 10 && !this.state.overTen) {
            this.setState({overTen: true})
        }
    }

  render() {
    let {count} = this.state;
    return (
        <div>
            <p>You clicked the button {count} times.</p>
            <button onClick={this.handleClick}>Click me!</button>
            <HighScore 
                overTen={this.state.overTen}
                onReset={(e) => this.resetCount(e)}
            />
        </div>
    )
  }
}

export default Application;
