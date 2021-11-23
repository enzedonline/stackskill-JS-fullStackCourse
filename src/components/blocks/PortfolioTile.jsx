import React, { Component } from "react";

class PortfolioTile extends Component {
    render () {
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href={`#${this.props.modalID}`}>
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.image} alt="..." />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.client}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.category}</div>
                    </div>
                </div>
            </div>        
        )
    }
}

export default PortfolioTile