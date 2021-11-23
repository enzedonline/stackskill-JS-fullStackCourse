import React, { Component } from "react";
import Field from "../blocks/Field";

const fieldList = {
  columns: [
    [
      {
        name: "name",
        fieldType: "input",
        inputType: "text",
        placeholder: "Your Name *",
        validations: { required: "A name is required." },
      },
      {
        name: "email",
        fieldType: "input",
        inputType: "email",
        placeholder: "Your email *",
        validations: {
          required: "An email is required.",
          email: "Invalid email address.",
        },
      },
      {
        name: "phone",
        fieldType: "input",
        inputType: "tel",
        placeholder: "Your phone *",
        validations: { required: "A phone number is required." },
      },
    ],
    [
      {
        name: "message",
        fieldType: "textarea",
        inputType: "",
        placeholder: "Message *",
        validations: { required: "A message is required." },
      },
    ],
  ],
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    alert("Submitted\n" + Object.entries(this.state).join("\n"));
  };

  render() {
    return (
      <div>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
            <form
              onSubmit={(e) => {
                this.submitHandler(e);
              }}
              id="contactForm"
              data-sb-form-api-token="API_TOKEN"
            >
              <div className="row align-items-stretch mb-5">
                {fieldList.columns.map((column, columnIndex) => {
                  return (
                    <div className="col-md-6" key={columnIndex}>
                      {column.map((field, i) => {
                        return (
                          <Field
                            {...field}
                            key={i}
                            value={this.state[field.name]}
                            onChange={(e) =>
                              this.setState({ [field.name]: e.target.value })
                            }
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center text-white mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              {/* <!-- Submit Button--> */}
              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase disabled"
                  id="submitButton"
                  type="submit"
                  onClick={(e) => {
                    this.submitHandler(e);
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
