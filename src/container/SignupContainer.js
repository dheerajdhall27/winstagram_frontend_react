import React from "react";
import {connect} from "react-redux";
import SignupComponent from "../component/SignupComponent";
import service from "../service/UserService";
import {
    signupUser,
    signupFailed,
    closeAlert,
} from "../actions/UserAction"

class signupContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.successful !== prevProps.successful) {
            this.setState({
                              successful: this.props.successful
                          })
        }
    }

    componentDidMount() {
        this.setState({
                          successful: this.props.successful
                      })
        console.log(this.props);
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
        return (
            <div>
                <label>{this.props.successful}</label>
                <div className={this.state.successful === false
                                ? "alert alert-danger text-center" : "d-none"}>
                    <div className="row">
                        <h6 className="ml-auto">SignUp Failed Username may be taken. Try a unique username</h6>
                        <i className="fa fa-times ml-auto mr-4"
                           onClick={this.closeAlertMessage}/>
                    </div>
                </div>
                <SignupComponent signupUser={(user) => {
                    this.props.signUp(user, this.props.history, this.state);
                }}/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user,
    successful: state.user.successful
})

const dispatchToPropertyMapper = (dispatch) => {
    return {
        signUp: async (user, history) => {
            console.log(user);
            await service.registerUser(user).then(signedInUser => {
                if(signedInUser === undefined) {
                    dispatch(signupFailed())
                } else {
                    dispatch(signupUser(signedInUser));
                    history.push(`/feed`);
                }
            }).catch(error => {
                console.log("SignUp failed: " + error);
            })
        },
        closeAlert: () => {
            dispatch(closeAlert())
        }
    }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(
    signupContainer)
