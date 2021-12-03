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
  }
}
