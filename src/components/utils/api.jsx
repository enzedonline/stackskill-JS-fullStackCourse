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
    axios.get(`${hostname}profiles`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      success(res);
    });
  },
  getPosts: (token, success) => {
    axios.get(`${hostname}posts?filter=%7B%20%22order%22%3A%20%22createdAt%20DESC%22%7D`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      success(res);
    });
  },
  getPost: (id, token, success) => {
    axios.get(`${hostname}posts/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      success(res);
    });
  },
  createPost: (post, token, success) => {
    axios.post(`${hostname}posts`, post, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      success(res);
    });
  },
  updatePost: (id, post, token, success) => {
    axios.patch(`${hostname}posts/${id}`, post, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log('api', res)
      success(res);
    });
  },
  getCategories: (token, success) => {
    axios.get(`${hostname}categories`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      success(res);
    });
  }
}
