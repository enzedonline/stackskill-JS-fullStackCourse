import React, { Component } from "react";
import PageWrapper from "./components/common/PageWrapper";
import AdminWrapper from "./components/common/AdminWrapper";
import LoginWrapper from "./components/common/LoginWrapper";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/admin/Login";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import Posts from "./components/pages/admin/Posts";
import Users from "./components/pages/admin/Users";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="home"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageWrapper>
                <Portfolio />
              </PageWrapper>
            }
          />
          <Route
            path="/team"
            element={
              <PageWrapper>
                <Team />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/admin"
            element={
              this.props.auth.token ? (
                <AdminWrapper>
                  <AdminDashboard />
                </AdminWrapper>
              ) : (
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
              )
            }
          />
          <Route
            path="/admin/posts"
            element={
                <AdminWrapper>
                  <Posts />
                </AdminWrapper>
            }
          />
          <Route
            path="/admin/users"
            element={
                <AdminWrapper>
                  <Users />
                </AdminWrapper>
            }
          />
        </Routes>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
