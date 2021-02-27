import axios from "axios";
// import e from "express";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-dom";
// import obj from "../../db";
const Add = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const { name, username, email } = user;

  const onInputChange = (name) => (e) => {
    setUser({ ...user, [name]: e.target.value });
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    console.log("Button clicked",user);
    await axios.post("http://localhost:3003/users", user);
    history.push("/Home");
    console.log(user)
  };

  return (
    <div className="container">
      <form onSubmit={(e) => onsubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={onInputChange("name")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your UserName"
            name="username"
            value={username}
            onChange={onInputChange("username")}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your email"
            name="email"
            value={email}
            onChange={onInputChange("email")}
          />
        </div>
        <button
          className="btn btn-primary btn-block"
          // onClick={(e) => {
          //   obj.push(user);
          // }}
        >
          Add User
        </button>
      </form>
    </div>
  );
};
export default Add
