import React from "react";
import {connect} from "react-redux";
import Login from "../component/Login";
import service from '../service/UserService'
import {closeAlert, loginFailed, loginUser} from '../actions/UserAction'

class LoginContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.successful !== prevProps.successful) {
      this.setState({
        successful: this.props.successful
      })
    }
  }

  componentDidMount() {
    // console.log(this.props.user);
  }

  state = {
    successful: true
  };

  closeAlertMessage = () => {
    this.setState({
      successful: true
    }, this.props.closeAlert())
  };

  render() {
    return(
        <div>
          <div className={this.state.successful === false ? "alert alert-danger text-center" : "d-none"}>
            <div className="row">
                <h6 className="ml-auto">Login Failed</h6>
                <i className="fa fa-times ml-auto mr-4" onClick={this.closeAlertMessage}/>
            </div>
          </div>
          <Login loginUser={(user) => {
            this.props.login(user, this.props.history, this.state);
          }}/>
        </div>
    )
  }
}

const stateToPropertyMapper = (state) => ({
  user: state.user.user,
  successful: state.user.successful
});

const dispatchToPropertyMapper = (dispatch) => {
  return {
    login: (user, history) => {
      service.loginUser(user).then(loggedInUser => {
        if(loggedInUser !== undefined) {
          dispatch(loginUser(loggedInUser));
          history.push(`/feed`);
        } else {
          dispatch(loginFailed())
        }
      }).catch(error => {
        console.log("login failed: " + error);
      })
    },

    closeAlert: () => {
      dispatch(closeAlert())
    }
  }
};


export default connect(stateToPropertyMapper, dispatchToPropertyMapper) (LoginContainer)
