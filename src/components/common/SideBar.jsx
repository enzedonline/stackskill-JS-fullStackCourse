import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/admin.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import FaceIcon from "@mui/icons-material/Face";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";

class SideBar extends Component {
  render() {
    return (
      <List>
        <Link to="/admin">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className="sidebar-icon" />
              <ListItemText primary="Dashboard" className="sidebar-label" />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/admin/posts">
          <ListItem button>
            <ListItemIcon>
              <ArticleIcon className="sidebar-icon" />
              <ListItemText primary="Posts" className="sidebar-label" />
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to="/admin/users">
          <ListItem button>
            <ListItemIcon>
              <FaceIcon className="sidebar-icon" />
              <ListItemText primary="Users" className="sidebar-label" />
            </ListItemIcon>
          </ListItem>
        </Link>
      </List>
    );
  }
}

export default SideBar;
