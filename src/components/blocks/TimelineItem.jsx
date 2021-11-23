import React, { Component } from "react";

class TimeLineItem extends Component {
    render () {
        const liClass = ((this.props.index+1)%2===0) ? "timeline-inverted" : ""
        return (
            <li className={liClass}>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={this.props.image} alt="..." /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{this.props.when}</h4>
                        <h4 className="subheading">{this.props.heading}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{this.props.description}</p></div>
                </div>
            </li>
        )
    }
}

export default TimeLineItem