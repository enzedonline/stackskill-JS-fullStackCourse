import React, { Component } from "react";
import { withRouter } from "../../core";
import { connect } from "react-redux";
import SimpleTable from '../../blocks/SimpleTable'
import * as AdminActions from '../../../store/actions/adminActions';

const columns = [
    {label: 'First Name', fieldName: 'firstName', format: 'string'},
    {label: 'Surname', fieldName: 'lastName', format: 'string'},
    {label: 'Title', fieldName: 'title', format: 'string'},
    {label: 'Roles', fieldName: 'roles', format: 'array'},
]

class Users extends Component {
    componentDidMount(){
        this.props.getUsers(this.props.auth.token)
    }
    render() {
        const users = this.props.admin.users;
    return (
      <div>
          <h2>Users</h2>
          <SimpleTable 
            columns={columns}
            rows={users}
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
      getUsers: (token) => {
          dispatch(AdminActions.getUsers(token));
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Users));
