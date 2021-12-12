import React, { Component } from "react";
import { connect } from "react-redux";
import * as AdminActions from "../../../store/actions/adminActions";
import * as SiteActions from "../../../store/actions/siteActions";
import {
  Box,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Container } from "@material-ui/core";
import { slugify } from "../../core";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = (to) => {
  let redirect = useNavigate();
  alert("redirect");
   return redirect(to);
}

const GetParams = () => {
  let params = {};
  params = useParams();
  alert(params);
  return params;
}

class CreatePost extends Component {
  componentDidMount() {
    this.props.getCategories(this.props.auth.token);
    const { view, id } = <GetParams></GetParams>;
    if (view === 'edit' && id) {
      this.props.getPost(id, this.props.auth.token);
    }
  }
  render() {
    return (
      <Paper elevation={3} style={{ width: "100%", padding: "20px" }}>
        <Container style={{ width: "100%" }}>
          <h2>Create a New Post</h2>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
          >
            <TextField
              fullWidth
              required
              id="title"
              name="title"
              label="Title"
              aria-label="title"
              value={this.props.values["title"]}
              onBlur={(e) => {
                this.props.handleBlur(e)
                if (!this.props.values["slug"]) {
                  this.props.setFieldValue(
                    "slug",
                    slugify(this.props.values["title"])
                  );
                }
              }}
              // onBlur={this.props.handleBlur}
              onChange={this.props.handleChange}
              helperText={
                this.props.touched["title"] && this.props.errors["title"]
              }
              error={
                !!this.props.touched["title"] && !!this.props.errors["title"]
              }
            />
            <TextField
              fullWidth
              required
              id="slug"
              label="Post Slug"
              aria-label="post slug"
              value={this.props.values["slug"]}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
              helperText={
                this.props.touched["slug"] && this.props.errors["slug"]
              }
              error={
                !!this.props.touched["slug"] && !!this.props.errors["slug"]
              }
            />
            <TextField
              fullWidth
              required
              select
              id="categoryId"
              name="categoryId"
              label="Category"
              aria-label="category"
              value={this.props.values["categoryId"]}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
              helperText={
                (this.props.touched["categoryId"] &&
                  this.props.errors["categoryId"]) ||
                "Select a category for this post"
              }
              error={
                !!this.props.touched["categoryId"] &&
                !!this.props.errors["categoryId"]
              }
            >
              {this.props.site.categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              required
              id="imageURL"
              label="Image URL"
              aria-label="image url"
              value={this.props.values["imageURL"]}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
              helperText={
                (this.props.touched["imageURL"] &&
                  this.props.errors["imageURL"]) ||
                "Paste the URL to the image to be used on this post"
              }
              error={
                !!this.props.touched["imageURL"] &&
                !!this.props.errors["imageURL"]
              }
            />
            <TextField
              fullWidth
              required
              multiline
              id="content"
              label="Post Body"
              aria-label="content"
              minRows={10}
              value={this.props.values["content"]}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
              helperText={
                this.props.touched["content"] && this.props.errors["content"]
              }
              error={
                !!this.props.touched["content"] &&
                !!this.props.errors["content"]
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              id="live"
              name="live"
              style={{ marginLeft: 0 }}
              label="Publish Article Immediately"
              value={this.props.values["live"]}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
            />
            <Box className="submit-bar" sx={{ "& > :not(style)": { m: 1 } }}>
              <Button
                variant="contained"
                id="submitButton"
                type="submit"
                disabled={
                  Object.keys(this.props.errors).length > 0 || !this.props.dirty
                }
                onClick={(e) => {
                  this.props.handleSubmit();
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
    site: state.site,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (token) => {
      dispatch(SiteActions.getCategories(token));
    },
    createPost: (post, token) => {
      dispatch(AdminActions.createPost(post, token));
    },
    getPost: (id, token) => {
      dispatch(AdminActions.getPost(id, token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: (props) => ({
      title: "",
      slug: "",
      content: "",
      imageURL: "",
      live: false,
      categoryId: "",
    }),
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required("A title is required")
        .min(6, "Name must be at least 6 characters."),
      slug: Yup.string()
        .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be a valid format")
        .required("A slug is required"),
      imageURL: Yup.string()
        .required("Image URL is required")
        .url("URL must be valid"),
      content: Yup.string()
        .required("Content is required")
        .min(10, "Please provide more details")
        .max(1000, "Please limit your message to 1000 characters"),
      categoryId: Yup.string().required("Category is required"),
    }),
    handleSubmit: (values, { setSubmitting, props }) => {
      props.createPost(values, props.auth.token);
      Redirect('/posts'); 
    },
  })(CreatePost)
);
