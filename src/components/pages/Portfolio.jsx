import React, { Component } from "react";
import Header from "../common/Header";
import PortfolioTile from "../blocks/PortfolioTile";
import PortfolioModal from "../blocks/PortfolioModal";

const portfolioList = [
    {client: 'Threads', category: 'Illustration', image: 'assets/img/portfolio/1.jpg',
     projectName: 'Fitness Tech', projectIntro: 'Some fitbit stuff', projectDescription: 'Lalalala'},
    {client: 'Explore', category: 'Graphic Design', image: 'assets/img/portfolio/2.jpg',
     projectName: 'Fitness Wear', projectIntro: 'Some running shoes', projectDescription: 'Lalalala'},
    {client: 'Finish', category: 'Identity', image: 'assets/img/portfolio/3.jpg',
     projectName: 'Rebranding', projectIntro: 'Some rebranding project', projectDescription: 'Lalalala'},
    {client: 'Lines', category: 'Branding', image: 'assets/img/portfolio/4.jpg',
     projectName: 'Packagin Design', projectIntro: 'Redesigning Packaging', projectDescription: 'Lalalala'},
    {client: 'Southwest', category: 'Website Design', image: 'assets/img/portfolio/5.jpg',
     projectName: 'Southwest Web Redesign', projectIntro: 'Redesigning a website', projectDescription: 'Lalalala'},
    {client: 'Window', category: 'Photography', image: 'assets/img/portfolio/6.jpg',
     projectName: 'Advertising Imagery', projectIntro: 'Building a branded image presence', projectDescription: 'Lalalala'},
]

class Portfolio extends Component {
    render () {
        return (
            <div>
                <Header 
                    title="Our Portfolio"
                    subtitle="This is the Portfolio Page"
                    buttonText="TELL ME MORE"
                    link='/services'
                    showButton={true}
                    image='/assets/img/3.jpg'
                />              
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            {portfolioList.map((service, index) => {
                                return <PortfolioTile key={index} modalID={`PortfolioModal${index}`} {...service} />
                            })}
                        </div>
                    </div>
                    {portfolioList.map((service, index) => {
                        return <PortfolioModal key={index} modalID={`PortfolioModal${index}`} {...service} />
                    })}
                </section>

            </div>
        )
    }
}

export default Portfolio