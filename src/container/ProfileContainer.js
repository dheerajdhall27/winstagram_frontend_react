import React from 'react';
import UserHeaderComponent from "../component/UserHeaderComponent";
import {connect} from "react-redux";
import ImageGrid from "../component/ImageGrid";
import userService from '../service/UserService'
import {
  getUserInformation,
  getUserInformationByHandle
} from "../actions/UserAction";

class ProfileContainer extends React.Component {

    state = {
        user: this.props.currentUser,
        sessionUser: this.props.user
    };

    componentDidMount() {
      this.props.getUserInformation(this.props.handle);
        // console.log(this.props.currentUser);
      this.setState({
        user: this.props.currentUser,
        sessionUser: this.props.user
      })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(this.props.currentUser !== prevProps.currentUser && this.props.currentUser !== undefined) {
          // console.log(prevProps.handle);
          // console.log(this.props.handle);
          if(prevProps.handle !== this.props.handle) {
              this.props.getUserInformation(this.props.handle);
          }
        this.setState({
          user: this.props.currentUser,
          sessionUser: this.props.user
        })
      }

      if(this.props.currentUser === undefined) {
          // console.log(this.props.handle)
          this.props.getUserInformation(this.props.handle);
      }
    }

  render() {
        return (
            <div>
                <div className="container ">
                     <UserHeaderComponent userData={this.props.currentUser}
                                          sessionUserData={this.props.user}
                                          handle={this.props.handle}/>
                     <ImageGrid userData={this.props.currentUser}/>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user
});

const dispatchToPropertyMapper = (dispatch) => {
    return{
      getUserInformation: (handle) => {
        userService.getUserProfileByHandle(handle)
        .then(user => {
          if(user !== null || user !== undefined) {
            dispatch(getUserInformationByHandle(user));
          }
        })
      }
    }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ProfileContainer)
