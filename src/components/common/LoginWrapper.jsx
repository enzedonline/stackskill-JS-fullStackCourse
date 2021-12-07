import React, { Component } from "react";
import Footer from "./Footer";
import '../../css/admin.css'

class LoginWrapper extends Component {
    render () { 
        return (
        <div id='admin-page'>
            {this.props.children}
            <Footer />
        </div>
        )
    }
}

export default LoginWrapper