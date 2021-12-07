import axios from "axios";

const hostname = "http://localhost:8000/";

export const API = {
  login: (email, password, success) => {
    axios
      .post(`${hostname}accounts/login`, 
       { email: email, password: password })
      .then((res) => {
        success(res);
      });
  },
  getUsers: (token, success) => {
    axios.get(`${hostname}users`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      success(res);
    });
  },
  getPosts: (token, success) => {
    axios.get(`${hostname}posts`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      success(res);
    });
  }
}
