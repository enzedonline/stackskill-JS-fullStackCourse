import React, { Component } from "react";
import Field from "../../blocks/Field";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import * as AuthActions from "../../../store/actions/authActions";

const fieldList = [
  {
    name: "email",
    fieldType: "input",
    inputType: "email",
    placeholder: "Email address",
    validations: {
      required: "An email is required.",
      email: "Invalid email address.",
    },
    autocomplete: "username"
  },
  {
    name: "password",
    fieldType: "input",
    inputType: "password",
    placeholder: "Password",
    validations: {
      required: "An password is required.",
    },
    autocomplete: "current-password"
  },
];

class Login extends Component {
  render() {
    return (
      <div>
        <div id="login-page" className="login-page">
          <div className="container">
            <div className="login-form">
              <div className="row login-form-title">
                <h1>Login form</h1>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.props.login(
                    this.props.values.email,
                    this.props.values.password
                  );
                }}
                id="contactForm"
              >
                <div className="row">
                  {fieldList.map((field, i) => {
                    return (
                      <Field
                        {...field}
                        key={i}
                        value={this.props.values[field.name]}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                        touched={this.props.touched[field.name]}
                        errors={this.props.errors[field.name]}
                      />
                    );
                  })}
                </div>
                <div className="d-none" id="submitSuccessMessage">
                  Login successful
                </div>
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error logging in.
                  </div>
                </div>
                <div className="text-end">
                  <button
                    className={`btn btn-primary ${
                      Object.keys(this.props.errors).length > 0 ||
                      (!this.props.dirty)
                        ? " disabled"
                        : ""
                    }`}
                    id="submitButton"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(AuthActions.login(email, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik({
    mapPropsToValues: () => ({
      email: "",
      password: "",
    }),
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("An email address is required")
        .email("Please enter a valid email address"),
      password: Yup.string().required("A password is required"),
    }),
    handleSubmit: (values, { setSubmitting }) => {
      console.log("Login: ", JSON.stringify(values));
    },
  })(Login)
);  
