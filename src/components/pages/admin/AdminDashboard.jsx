import React, { Component } from "react";
import { withRouter } from "../../core";
import { connect } from "react-redux";

class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <h5>You are logged in with {this.props.auth.profile.id}</h5>
        <h5>Profile: {this.props.auth.profile.title}</h5>
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
