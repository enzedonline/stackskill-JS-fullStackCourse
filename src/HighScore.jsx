import React, { Component } from "react";

class HighScore extends Component {
    render () {
        if (this.props.overTen) {
            return (
                <div>
                    <p>You beat the highscore of 10!</p>
                    <button onClick={(e) => this.props.onReset(e)}>Reset</button> 
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default HighScore