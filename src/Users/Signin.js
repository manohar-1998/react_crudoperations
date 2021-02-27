import Password from "antd/lib/input/Password";
import React,{useState} from "react";
// import { signin } from "./signin/db.json";
// import {Link} form "react-router-dom";


const Signin = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-dark">Name</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <button className="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
        )
    return(      
                <h1>
                    {Signin()}
                </h1>
    );
};
export default Signin;