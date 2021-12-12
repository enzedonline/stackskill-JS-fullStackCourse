import React, { useEffect } from "react";
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

function getInitialValues(props, post) {
  if (Object.getOwnPropertyNames(post).length > 0) {
    props.values["title"] = post.title;
    props.values["slug"] = post.slug;
    props.values["content"] = post.content;
    props.values["imageURL"] = post.imageURL;
    props.values["live"] = post.live;
    props.values["categoryId"] = post.categoryId;
  } else {
    props.values["title"] = "";
    props.values["slug"] = "";
    props.values["content"] = "";
    props.values["imageURL"] = "";
    props.values["live"] = false;
    props.values["categoryId"] = "";
    props.admin.post = {};
    console.log(props.admin.loaded);
  }
}

function PostForm(props) {
  const { id } = useParams();
  props.page.id = id;
  const getPost = props.getPost;
  const getCategories = props.getCategories;
  const token = props.auth.token;
  let post = {};
  let navigate = useNavigate();

  // useEffect(() => {
  //   props.page.loaded=false;
  // }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategories(token);
    if (id) {
      getPost(id, token);
    }
  }, [id, token, getCategories, getPost]);

  if (!props.page.loaded) {
    if (id) {
      post = props.admin.post;
    }
    getInitialValues(props, post);
    props.page.loaded = true;
  }

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
            value={props.values["title"]}
            onBlur={(e) => {
              props.handleBlur(e);
              if (!props.values["slug"]) {
                props.setFieldValue("slug", slugify(props.values["title"]));
              }
            }}
            onChange={props.handleChange}
            helperText={props.touched["title"] && props.errors["title"]}
            error={!!props.touched["title"] && !!props.errors["title"]}
          />
          <TextField
            fullWidth
            required
            id="slug"
            name="slug"
            label="Post Slug"
            aria-label="post slug"
            value={props.values["slug"]}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            helperText={props.touched["slug"] && props.errors["slug"]}
            error={!!props.touched["slug"] && !!props.errors["slug"]}
          />
          <TextField
            fullWidth
            required
            select
            id="categoryId"
            name="categoryId"
            label="Category"
            aria-label="category"
            value={props.values["categoryId"]}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            helperText={
              (props.touched["categoryId"] && props.errors["categoryId"]) ||
              "Select a category for this post"
            }
            error={
              !!props.touched["categoryId"] && !!props.errors["categoryId"]
            }
          >
            {props.site.categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            required
            id="imageURL"
            name="imageURL"
            label="Image URL"
            aria-label="image url"
            value={props.values["imageURL"]}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            helperText={
              (props.touched["imageURL"] && props.errors["imageURL"]) ||
              "Paste the URL to the image to be used on this post"
            }
            error={!!props.touched["imageURL"] && !!props.errors["imageURL"]}
          />
          <TextField
            fullWidth
            required
            multiline
            id="content"
            name="content"
            label="Post Body"
            aria-label="content"
            minRows={10}
            value={props.values["content"]}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            helperText={props.touched["content"] && props.errors["content"]}
            error={!!props.touched["content"] && !!props.errors["content"]}
          />
          <FormControlLabel
            control={<Checkbox />}
            id="live"
            name="live"
            style={{ marginLeft: 0 }}
            label="Publish Article Immediately"
            value={props.values["live"]}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
          <Box className="submit-bar" sx={{ "& > :not(style)": { m: 1 } }}>
            <Button
              variant="contained"
              id="submitButton"
              type="submit"
              disabled={
                Object.keys(props.errors).length > 0 || (!props.dirty && !id)
              }
              onClick={(e) => {
                props.handleSubmit();
                e.preventDefault();
                navigate("/admin/posts/", { replace: true });
                window.scrollTo(0, 0);
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

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (token) => {
      dispatch(SiteActions.getCategories(token));
    },
    createPost: (post, token) => {
      dispatch(AdminActions.createPost(post, token));
    },
    updatePost: (id, post, token) => {
      dispatch(AdminActions.updatePost(id, post, token));
    },
    getPost: (id, token) => {
      dispatch(AdminActions.getPost(id, token));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    admin: state.admin,
    site: state.site,
    page: {},
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
      if (!!props.page.id) {
        props.updatePost(props.page.id, values, props.auth.token);
      } 
      else {
        props.createPost(values, props.auth.token);
      }
    },
  })(PostForm)
);
