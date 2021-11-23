import React, { Component } from "react";

class PortfolioModal extends Component {
    render () {
        return (
            <div className="portfolio-modal modal fade" id={this.props.modalID} tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="modal-body">
                                        <h2 className="text-uppercase">{this.props.projectName}</h2>
                                        <p className="item-intro text-muted">{this.props.projectIntro}</p>
                                        <img className="img-fluid d-block mx-auto" src={this.props.image} alt="..." />
                                        <p>{this.props.projectDescription}</p>
                                        <ul className="list-inline">
                                            <li>
                                                <strong>Client:</strong>
                                                {this.props.client}
                                            </li>
                                            <li>
                                                <strong>Category:</strong>
                                                {this.props.category}
                                            </li>
                                        </ul>
                                        <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                            <i className="fas fa-times me-1"></i>
                                            Close Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioModal