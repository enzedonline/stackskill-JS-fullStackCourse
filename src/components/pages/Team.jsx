import React, { Component } from "react";
import Header from "../common/Header";
import TeamMember from "../blocks/TeamMember";

const teamList = [
    {name: 'Parveen Anand', role: 'Lead Designer', image: 'assets/img/team/1.jpg', twitter: '', facebook: '', linkedin: ''},
    {name: 'Diana Petersen', role: 'Lead Marketer', image: 'assets/img/team/2.jpg', twitter: '', facebook: '', linkedin: ''},
    {name: 'Larry Parker', role: 'Lead Developer', image: 'assets/img/team/3.jpg', twitter: '', facebook: '', linkedin: ''},
]

class Team extends Component {
    render () {
        return (
            <div>
                <Header 
                    title="Our Team"
                    subtitle="This is the Team Page"
                    buttonText="TELL ME MORE"
                    link='/services'
                    showButton={true}
                    image='/assets/img/5.jpg'
                />              
                <section className="page-section bg-light" id="team">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">

                            {teamList.map((teamMember, index) => {
                                return <TeamMember key={index} {...teamMember} />
                            })}

                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Team