import React, { Component } from "react";
import { withRouter } from "../core";
import { connect } from "react-redux";

class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <h2>You are logged in with {this.props.auth.token}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminDashboard));
