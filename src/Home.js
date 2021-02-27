import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, Typography } from "antd";
import onsubmit from "./components/manipulation/add";
// import { Link } from "react-router-dom";
import { users } from "./Users/db.json";
import { render } from "@testing-library/react";
const { Text } = Typography;
export default class Home extends React.Component {
  // const [usersState, setuser] = useState([]);
  constructor(props) {
    super(props);

    // this.state = { disabled: false };
    
    this.state = {
      usersState: users,
      allowEditIndexes: [],
      name: "",
    };
  }

  // useEffect(() => {
  //   loaduser();
  // }; []);

  allowEdit(indexToUpdate, saveOrEdit) {
    console.log("Inside allowEdit state is =", indexToUpdate);

    let obj2 = this.state.allowEditIndexes; //using index values to edit
    console.log("obj2 value:", obj2);

    if (obj2.includes(indexToUpdate)) {
      console.log("Inside splice condition");

      obj2.splice(obj2.indexOf(indexToUpdate), 1); //removing the value using splice
    } else obj2.push(indexToUpdate);
    console.log("obj2 = ", obj2); //Returns index value...

    this.setState({
      allowEditIndexes: obj2,
    });

    if (saveOrEdit == "save") {
      let obj = this.state.usersState;

      let putThisObj = {  
        name: obj[indexToUpdate].name,
        username: obj[indexToUpdate].username,
        email: obj[indexToUpdate].email,
        id: obj[indexToUpdate].id,
      };
      this.updationpart(obj[indexToUpdate].id, putThisObj);
    }
  }

  setEditedValue(indexToChange, updatedValue, editedtype){
    console.log("Know the value", indexToChange);
    let obj = this.state.usersState;
    console.log("What's happening obj:", obj);
    if (editedtype == "name") obj[indexToChange].name = updatedValue;
    else if (editedtype == "username")
      obj[indexToChange].username = updatedValue;
    else if (editedtype == "email") obj[indexToChange].email = updatedValue;

    // console.log("Hii in editable part",obj[indexToChange])

    if (this.state.allowEditIndexes.includes(indexToChange))
      this.setState({
        usersState: obj,
      });

    console.log(
      "Inside setEditedValue state is =",
      this.state.usersState[indexToChange].name
    );

    //  this.setState({ [usersState[indexToChange].name]: updatedValue });
  }

  //Deletion part of the users

  deleteuser(index) {
    console.log("Checking index value", index);
    axios.delete(`http://localhost:3003/users/${index}`);
    console.log("end");
  }

  updationpart = (index, putThisObj) => {
    // e.preventdefault();
    console.log("obj in updation part =", putThisObj);
    axios.put(`http://localhost:3003/users/${index}`, putThisObj, 
    // {
    //   "Content-Type": "application/json",
    // }
    );
    // history.push("/");
  };
  // onsave(){
  //  axios.post("http://localhost:3003/users", user);
  // }

  //   const loaduser = async () => {
  //     const result = await axios.get("http://localhost:3003/users");
  //     setuser(result.data);
  //   };
  // deleteuser(loaduser,id){
  //   const result = axios.delete(`http://localhost:3003/users/${id}`);
  //   loaduser();
  // };

  render() {
    console.log(this.state.allowEditIndexes);
    return (
      <form>
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
              {this.state.usersState.map((user, index) => {
                console.log("Checking state value=",this.state)
                return (
                  // sample.map((user)=>(
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <Input
                        value={user.name}
                        onChange={(e) => {
                          this.setEditedValue(index, e.target.value, "name");
                        }}                 
                      />
                    </td>
                    <td>
                      {" "}
                      <Input
                        // editable={this.state.TextInputDisableHolder}
                        // disabled = {(this.state.disabled)? "disabled" : ""}  
                        value={user.username}
                        onChange={(e) => {
                          this.setEditedValue(index,e.target.value,"username");
                        }}
                      />
                    </td>
                    <td>
                      <Input
                        value={user.email}
                        onChange={(e) => {
                          this.setEditedValue(index, e.target.value, "email");
                        }} 
                      />
                    </td>
                    <td>
                      <Button
                        type="primary mr-2"
                        onClick={() =>
                          this.allowEdit(
                            index,
                            this.state.allowEditIndexes.includes(index)  
                              ? "save"
                              : "edit"
                          )
                        }
                        //On click edit save button change to redd...
                        danger={
                          this.state.allowEditIndexes.includes(index)
                            ? true
                            : false
                        }
                      >
                        {this.state.allowEditIndexes.includes(index)     
                          ? "Save"
                          : "Edit"}
                      </Button>{" "}
                      <button
                        type="danger"
                        onClick={() => this.deleteuser(user.id)}
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
      </form>
    );
  }
}
