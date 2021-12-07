import React, { Component } from "react";
import { withRouter } from "../../core";
import { connect } from "react-redux";
import SimpleTable from '../../blocks/SimpleTable'
import * as AdminActions from '../../../store/actions/adminActions';

const columns = [
    {label: 'Title', fieldName: 'title'},
    {label: 'Posted', fieldName: 'createdAt'},
    {label: 'Author First Name', fieldName: 'profile.firstName'},
    {label: 'Author Surname', fieldName: 'profile.lastName'},
    {label: 'Live', fieldName: 'live'},
]

class Posts extends Component {
    componentDidMount(){
        this.props.getPosts(this.props.auth.token)
    }
    render() {
        const posts = this.props.admin.posts;
    return (
      <div>
          <h2>Posts</h2>
          <SimpleTable 
            columns={columns}
            rows={posts}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      getPosts: (token) => {
          dispatch(AdminActions.getPosts(token));
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Posts));
