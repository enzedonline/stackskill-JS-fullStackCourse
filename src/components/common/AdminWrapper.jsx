import React, { Component } from "react";
import Footer from "./Footer";
import '../../css/admin.css'

class AdminWrapper extends Component {
    render () { 
        return (
        <div id='admin-page'>
            {this.props.children}
            <Footer />
        </div>
        )
    }
}

export default AdminWrapper