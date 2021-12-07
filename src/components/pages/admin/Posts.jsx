import React, { Component } from "react";
import { withRouter } from "../../core";
import { connect } from "react-redux";

class Posts extends Component {
  render() {
    return (
      <div>
          <h2>Posts</h2>
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
)(withRouter(Posts));
