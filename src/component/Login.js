import React from 'react';
import {Link} from "react-router-dom";
import "../css/login.style.client.css"

class Login extends React.Component {

    state = {
      handle: '',
      password: ''
    };

    stopValidation = (e) =>  {
      e.preventDefault();
      return false;
    };

    render() {
        return (
            <div>
                <div className="container mt-4 p-4">
                    <form name="login" onSubmit={this.stopValidation}>
                      <div className="row form-row justify-content-center p-2 mt-4">
                        <div>
                          <span className="p-1 pt-2 input-group-addon">
                            <i className="fa fa-2x fa-user mt-2"/>
                          </span>
                        </div>
                        <div className = "input-group-lg username-input">
                          <input className="form-control ml-2 rounded"
                                 type="text"
                                 placeholder="Username"
                                 onChange={(e) => this.setState({
                                   handle: e.target.value
                                 })} required/>
                        </div>
                      </div>

                      <div className="row form-row justify-content-center p-2">
                        <div>
                          <span className="p-1 pt-2 input-group-addon">
                            <i className="fa fa-2x fa-lock mt-2"/>
                          </span>
                        </div>
                        <div className="input-group-lg password-input">
                          <input className="form-control ml-2 rounded"
                                 type="password"
                                 placeholder="Password"
                                 onChange={(e) => this.setState({
                                   password: e.target.value
                                 })} required/>
                        </div>
                      </div>

                      <div className="row form-row justify-content-center p-2 login-btn">
                        <div className="ml-3 button-login">
                          <button onClick={() => this.props.loginUser(this.state)}
                                  className="btn-primary btn-lg ml-3 form-control mt-2 rounded"
                                  type="submit"> Log In
                          </button>
                        </div>
                      </div>
                    </form>


                    <div className="row justify-content-center mt-4 p-2 ml-2">
                      <div className="card form-group signup-card ml-4 bg-light p-2">
                        <div className="row card-body">
                          <div className="col-8">
                            <h5 className="text-decoration-none text-muted d-none d-sm-block">
                              do not have an account?
                            </h5>
                            <span className="text-decoration-none text-muted d-sm-none d-md-none d-lg-none d-xl-none">
                              No Account?
                            </span>
                          </div>
                          <div>
                            <Link to="/signup">
                              <button className="btn-outline-primary btn-sm">
                                Sign Up
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login
