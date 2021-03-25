import React from 'react';
import {Link} from "react-router-dom";
import "../css/signup.client.style.css"

class SignupComponent extends React.Component {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        handle: '',
        password: '',
        userType: "0",
        verifyPassword: ''
    }

    register = (user) => {
        console.log(user);
    }

    stopValidation = (e) => {
        e.preventDefault();
        return false;
    };

    render() {
        return (
            <div>
                <div className="container">
                    <form name="signUp" onSubmit={this.stopValidation}>
                        <div
                            className="row form-row pt-2 justify-content-center">
                            <div className="col-5 ">
                                <h3 className="pt-2 text-center"> Sign Up </h3>
                            </div>
                        </div>
                        <div
                            className="row form-row p-2 mt-5 input-group input-group-lg ml-auto mr-auto">
                              <span className="pr-2 pt-2 input-group-addon">
                                <i className="fa fa-2x fa-fw fa-envelope-square"></i>
                              </span>
                            <input className="form-control"
                                   type="email"
                                   onChange={(e) => this.setState({
                                                                      email: e.target.value
                                                                  })}
                                   placeholder="Email address" required/>
                        </div>
                        <div
                            className="row form-row p-2 input-group input-group-lg ml-auto mr-auto">
                              <span className=" pr-2 pt-2 input-group-addon">
                                <i className="fa fa-2x fa-fw fa-user"></i>
                              </span>
                            <input className="form-control"
                                   type="text"
                                   onChange={(e) => this.setState({
                                                                      firstName: e.target.value
                                                                  })}
                                   placeholder="First Name" required/>
                        </div>
                        <div
                            className="row form-row p-2 input-group input-group-lg ml-auto mr-auto">
                              <span className=" pr-2 pt-2 input-group-addon">
                                <i className="fa fa-2x fa-fw fa-user"></i>
                              </span>
                            <input className="form-control"
                                   type="text"
                                   onChange={(e) => this.setState({
                                                                      lastName: e.target.value
                                                                  })}
                                   placeholder="Last Name" required/>
                        </div>
                        <div
                            className="row form-row p-2 input-group input-group-lg ml-auto mr-auto">
                                <span className="pr-2 pt-2 input-group-addon">
                                    <i className="fa fa-2x fa-fw fa-users"></i>
                                </span>
                            <select className="form-control"
                                    id="roleFld"
                                    title="User Type"
                                    onChange={(e) => this.setState({
                                                                       userType: e.target.value
                                                                   })}
                                    name="role">
                                <option value={0}>
                                    Regular
                                </option>
                                <option value={1}>
                                    Business
                                </option>
                            </select>
                        </div>
                        <div
                            className="row form-row p-2 input-group input-group-lg ml-auto mr-auto">
                              <span
                                  className="pl-2 pr-3 pt-2 input-group-addon">
                                <i className="fa fa-lg fa-fw fa-address-card"></i>
                              </span>
                            <input className="form-control"
                                   onChange={(e) => this.setState({
                                                                      handle: e.target.value
                                                                  })}
                                   type="text"
                                   value={this.state.username}
                                   placeholder="Username" required/>
                        </div>
                        <div
                            className="row form-row p-2 input-group input-group-lg ml-auto mr-auto">
                              <span className="pr-2 pt-2 input-group-addon">
                                <i className="fa fa-2x fa-fw fa-lock"></i>
                              </span>
                            <input className="form-control"
                                   onChange={(e) => this.setState({
                                                                      password: e.target.value
                                                                  })}
                                   value={this.state.password}
                                   type="password"
                                   placeholder="Password" required/>
                        </div>
                        <div
                            className="row form-row p-2 input-group input-group-lg ml-auto mr-auto">
                              <span className="pr-2 pt-2 input-group-addon">
                                <i className="fa fa-2x fa-fw fa-lock"></i>
                              </span>
                            <input className="form-control"
                                   onChange={(e) => this.setState({
                                                                      verifyPassword: e.target.value
                                                                  })}
                                   value={this.state.verifyPassword}
                                   type="password"
                                   placeholder="Verify Password" required/>
                        </div>
                        <div className="row form-row p-2 text-center">
                          <span className="ml-auto mr-auto">By clicking Sign Up you agree to our <Link to="/privacy" className="mx-1"> Privacy Policy</Link></span>
                        </div>
                        <div className= "row form-row justify-content-md-center btn-signup">
                                <button
                                    className="btn-block btn-primary btn-lg mt-2 text-center"
                                    onClick={() => this.props.signupUser(
                                        this.state)}
                                    type="submit"> Sign Up
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupComponent
