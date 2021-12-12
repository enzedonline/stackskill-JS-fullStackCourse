import React, { Component } from "react";
import { withRouter } from "../../core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SimpleTable from "../../blocks/SimpleTable";
import * as AdminActions from "../../../store/actions/adminActions";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {Paper, Box} from "@mui/material";

const columns = [
  { label: "Title", fieldName: "title", format: "string", linkIdPath: "/admin/post/edit/" },
  { label: "Category", fieldName: "category.name", format: "string" },
  { label: "Posted", fieldName: "createdAt", format: "datetime" },
  { label: "Author", fieldName: "profile.firstName", format: "string" },
  { label: "", fieldName: "profile.lastName", format: "string" },
  { label: "Live", fieldName: "live", format: "yesno" },
];


class Posts extends Component {
  constructor(props) {
    super(props);
    this.componentDidUpdate();
   }
  componentDidUpdate() {
    this.props.getPosts(this.props.auth.token);
  }
  render() {
    const posts = this.props.admin.posts;
    return (
      <div>
        <Paper elevation={3} style={{ width: "100%", padding: "20px" }}>
        <h2>Posts</h2><hr />
        <SimpleTable columns={columns} rows={posts} elevation={0} />
        </Paper>
        <Box className="fab-bar" sx={{ "& > :not(style)": { m: 1 } }}>
          <Link to="/admin/post/create">
            <Fab color="secondary" aria-label="add" title="Create Post">
              <AddIcon />
            </Fab>
          </Link>
        </Box>
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
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Posts));
