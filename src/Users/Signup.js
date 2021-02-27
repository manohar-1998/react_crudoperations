import React from "react";
// import {Link} form "react-router-dom";


const Signup = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-dark">Name</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Email</label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-dark">Password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <button className="btn btn-primary btn-block">SignUp</button>
                    </form>
                </div>
            </div>
        )
    return(
                <h1>
                    {Signup()}
                </h1>
    );
};
export default Signup;