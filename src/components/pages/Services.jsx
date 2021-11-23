import React, { Component } from "react";
import Header from "../common/Header";
import ServiceTile from "../blocks/ServiceTile";

const serviceList = [
    {
        serviceTitle: 'E-Commerce', 
        serviceDescription: `Create an Online Store. Generate More Demand. Get Tools to Grow Your Business with Wix. Build the Online Store that You've Always Dreamed of. Boost Your Business with Wix! SEO wizard. Top industry hosting. 1000s of free images. Market leaders. Multi-Channel Sales.`,
        serviceIcon: 'fa-shopping-cart'
    },
    {
        serviceTitle: 'Responsive Design', 
        serviceDescription: `Responsive web design (RWD) or responsive design is an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction.`,
        serviceIcon: 'fa-laptop'
    },
    {
        serviceTitle: 'Web Security', 
        serviceDescription: `In general, web security refers to the protective measures and protocols that organizations adopt to protect the organization from, cyber criminals and threats that use the web channel. Web security is critical to business continuity and to protecting data, users and companies from risk.`,
        serviceIcon: 'fa-lock'
    },
]

class Services extends Component {
    render () {
        return (
            <div>
                <Header 
                    title="Studio Services"
                    subtitle="This is the Services Page"
                    showButton={false}
                    image='/assets/img/2.jpg'
                />              
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {serviceList.map((service, index) => {
                                return <ServiceTile key={index} {...service} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Services