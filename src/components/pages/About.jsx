import React, { Component } from "react";
import Header from "../common/Header";
import TimeLineItem from "../blocks/TimelineItem";

const timelineList = [
    {when: '2009-2011', heading:'Our Humble Beginnings', description:'Stuff at the beginning', image: 'assets/img/about/1.jpg'},
    {when: 'March 2011', heading:'An Agency is Born', description:'Something about the birth of the agency', image: 'assets/img/about/2.jpg'},
    {when: 'December 2015', heading:'Transition to Full Service', description:'Something about full service', image: 'assets/img/about/3.jpg'},
    {when: 'July 2020', heading:'Phase Two Expansion', description:'Description of expnsion', image: 'assets/img/about/4.jpg'},
]

class About extends Component {
    render () {
        return (
            <div>
                <Header 
                    title="About Our Studio"
                    subtitle="This is the About Page"
                    buttonText="TELL ME MORE"
                    link='/services'
                    showButton={true}
                    image='/assets/img/1.jpg'
                />              
                <section className="page-section" id="about">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <ul className="timeline">
                            {timelineList.map((service, index) => {
                                    return <TimeLineItem key={index} index={index} {...service} />
                            })}                        
                            <li class="timeline-inverted">
                                <div class="timeline-image">
                                    <h4>
                                        Be Part
                                        <br />
                                        Of Our
                                        <br />
                                        Story!
                                    </h4>
                                </div>
                            </li>                        
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default About