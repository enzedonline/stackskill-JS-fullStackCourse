import React, { Component } from "react";
import Header from "../common/Header";

class Home extends Component {
    render () {
        return (
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="TELL ME MORE"
                    link='/services'
                    showButton={true}
                    image='/assets/img/header-bg.jpg'
                />              
            </div>
        )
    }
}

export default Home