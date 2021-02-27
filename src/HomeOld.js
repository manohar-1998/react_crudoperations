import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input } from "antd";
// import { Link } from "react-router-dom";
import { users } from "./db.json";
// import { Button } from "bootstrap";
// console.log(users)
// let sample = users;
const Home = () => {
  const [usersState, setuser] = useState([]);

  useEffect(() => {
    // loaduser();
  }, []);

  setuser(users);

  function edituser(value) {
    console.log("value from on click of edit = ", value);
  }

  //   const loaduser = async () => {
  //     const result = await axios.get("http://localhost:3003/users");
  //     setuser(result.data);
  //   };
  //   const deleteuser = async (id) => {
  //     const result = await axios.delete(`http://localhost:3003/users/${id}`);
  //     loaduser();
  //   };
  //   console.log(sample);
  return (
    <div>
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersState.map((user, index) => {
            return (
              // sample.map((user)=>(
              <tr>
                <td>{user.id}</td>
                <td>
                  <Input value={user.name} />
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {/* <button variant="primary" class="btn btn-primary ">
                    View
                  </button>{" "} */}
                  <Button type="primary" onClick={() => edituser(user.name)}>
                    Edit
                  </Button>
                  <button
                    class="btn btn-info"
                    to={`/manipulation/Edit/${user.id}`}
                  >
                    Edit
                  </button>{" "}
                  <button
                    class="btn btn-danger "
                    //   onClick={() => deleteuser(user.id)}
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
