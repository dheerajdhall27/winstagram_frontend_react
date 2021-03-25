import HeadingComponent from "../component/HeadingComponent";
import React from "react";
import {connect} from "react-redux";
import userService from "../service/UserService";
import hashTagService from "../service/HashtagService"
import {getUserInformation} from "../actions/UserAction";
import {updateHashTagList} from "../actions/hashtagAction";


class HeadingContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserInformation();
        this.setState({
            user: this.props.user,
            hashTags: this.props.hashTags
        })
    }

    state = {
        user: this.props.user,
        hashTags: this.props.hashtags
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.user !== this.props.user) {
            this.setState({
                ...this.state,
                user: this.props.user
            })
        }
        if(prevProps.hashtags !== this.props.hashtags) {
            this.setState({
                ...this.state,
                hashTags: this.props.hashtags
            })
        }
    }

    render() {
        return (
            <div>
                <HeadingComponent userData={this.state.user}
                                  hashTagData={this.state.hashTags}
                                  updateHashTags={(text) =>this.props.getHashTagInformation(text)}
                                  history={this.props.history}/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    hashtags: state.hashtags.hashtags,
    user: state.user.user
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        getUserInformation: () => {
            userService.profile()
                .then(loggedInUser => {
                    if(loggedInUser !== null || loggedInUser !== undefined) {
                        dispatch(getUserInformation(loggedInUser))
                    }
                })
        },

        getHashTagInformation: (hashTagText) => {
            hashTagService.getHashTags(hashTagText)
                .then(hashTagList => {
                    if(hashTagList !== null)
                        dispatch(updateHashTagList(hashTagList))
                })
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(HeadingContainer)
