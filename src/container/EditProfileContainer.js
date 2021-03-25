import React from "react";
import {connect} from "react-redux";
import service from "../service/UserService";
import imageService from "../service/ImageService";
import EditProfile from "../component/EditProfile";
import {uploadToS3} from "../actions/ImageAction";
import {updateUser} from "../actions/UserAction";

class EditProfileContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.userId);
        console.log(this.props.currentUser);
        if(this.props.user !== undefined) {
            this.setState({
                profileImageUrl: this.props.user.profileImageUrl
            })
        }

    }


    state = {
        user: this.props.user,
        profileImageUrl: ''
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.S3URL);
        if(this.props.S3URL !== '' && this.props.S3URL !== undefined) {
            if(this.state.profileImageUrl !== this.props.S3URL) {
                this.setState({...this.state, profileImageUrl: this.props.S3URL})
            }
        }

        if(this.state.user !== prevState.user) {
            this.setState({
                user: this.props.user
            })
        }
    }

    render() {
        return(
            <EditProfile userData={this.props.user} s3Url= {this.props.S3URL}profileImg={this.state.profileImageUrl} uploadProfilePic={ (file) => {this.props.uploadProfilePic(file)}}
                         editProfile={(user)=> { console.log(user);
                         this.props.editProfile(user)}}/>
        )}

}

const stateToPropertyMapper = (state) => ({
    currentUser: state.user.currentUser,
    user: state.user.user,
    S3URL: state.images.S3URL
});

const dispatchToPropertyMapper = (dispatch) => ({
    uploadProfilePic: (file) => {
        console.log("Upload to s3 called");
            imageService.uploadToS3(file).then((response) => {
                if(!response.ok) {
                    console.log("response not okay"+ response);
                    return "";
                } else {
                    response.text().then((data) => {
                        dispatch(uploadToS3(data));
                    });
                }
            })
    },
    editProfile: (editedUser) => {
        console.log("Update user called with values");
        console.log(editedUser);
        service.editProfile(editedUser).then( (updatedUser) => {

            dispatch(updateUser(updatedUser));
            alert("Profile updated successfully!")
        })
    }
});


export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper,
)(EditProfileContainer)
