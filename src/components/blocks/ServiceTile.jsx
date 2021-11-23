import React, { Component } from "react";

class ServiceTile extends Component {
    render () {
        return (
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className={`fas ${this.props.serviceIcon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="my-3">{this.props.serviceTitle}</h4>
                <p className="text-muted">{this.props.serviceDescription}</p>
            </div>
        )
    }
}

export default ServiceTile