import React from 'react';
import {Link} from "react-router-dom";
import service from "../service/UserService";
import {updateUser} from "../actions/UserAction";
import {connect} from "react-redux";

class AccountInfo extends React.Component {

    showAlert() {
        if (window.confirm("Are you sure you want to logout?")) {
            this.props.logout(this.props.history);
        } else {

        }
    }

    render() {
        return (
            <div>
                <div className="container pt-5">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                            Edit Info
                        </li>
                        <Link to="/privacy">
                        <li className="list-group-item list-group-item-action">
                            Privacy Policy
                        </li>
                        </Link>
                        <a href="https://i.gifer.com/g100.gif">
                        <li className="list-group-item list-group-item-action">
                            Click ME!
                        </li>
                        </a>
                    </ul>
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-10 m-5">
                            <a className="text-center text-light btn-block btn-danger btn-lg wbdv-button wbdv-logout"
                               onClick={() => {this.showAlert()}}>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
});

const dispatchToPropertyMapper = (dispatch) => ({
    logout: (history) => {
        service.logout().then( (response) => {
                if(response.ok) {
                    dispatch(updateUser(undefined))
                    history.push("/login")
                }
            }
        )
    }
});


export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper,
)(AccountInfo)
