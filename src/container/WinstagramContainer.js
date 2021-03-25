import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import {combineReducers, createStore} from "redux"
import {Provider} from "react-redux";
import hashtagReducer from "../reducer/HashtagReducer";
import UserReducer from "../reducer/UserReducer";
import HeadingContainer from "./HeadingContainer";
import HashtagContainer from "./HashtagContainer";
import UploadImageContainer from "./UploadImageContainer";
import FeedContainer from "./FeedContainer";
import AccountInfo from "../component/AccountInfo";
import EditProfile from "../component/EditProfile";
import SignupContainer from "./SignupContainer";
import ImageReducer from "../reducer/ImageReducer";
import DetailsReducer from "../reducer/DetailsReducer"
import LoginContainer from "./LoginContainer";
import PrivacyPolicy from "../component/PrivacyPolicy";
import DetailsContainer from "./DetailsContainer";
import EditProfileContainer from "./EditProfileContainer";

const rootReducer = combineReducers({
    hashtags:hashtagReducer,
    images:ImageReducer,
    user:UserReducer,
    details: DetailsReducer
})
const store = createStore(rootReducer)

class WinstagramContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Provider store={store}>
                    <Router>
                        <Route
                            render={(props) =>
                                <HeadingContainer {...props}/>
                            }
                        />

                        <Route
                            path="/user/:handle"
                            exact={true}
                            render={(props) =>
                                <ProfileContainer
                                    {...props}
                                    key={props.match.params.handle}
                                    handle={props.match.params.handle}
                                    />
                            }
                        />

                        <Route
                            path="/user/:userId/info"
                            exact={true}
                            render={(props) =>
                                <AccountInfo
                                    {...props}
                                    userId={props.match.params.userId}
                                    />
                            }
                        />

                        <Route
                            path="/user/:userId/edit"
                            exact={true}
                            render={(props) =>
                                <EditProfileContainer
                                    {...props}
                                    userId={props.match.params.userId}
                                    />
                            }
                        />

                        <Route
                            path="/feed"
                            exact={true}
                            render={(props) =>
                                <FeedContainer {...props}/>
                            }
                        />

                        <Route
                            path="/search/"
                            exact={true}
                            render={(props) =>
                                <HashtagContainer
                                    {...props}
                                    hashtagText = {" "}
                                    />
                            }
                        />

                        <Route
                            path="/search/:hashtagText"
                            render={(props) =>
                                <HashtagContainer
                                    {...props}
                                    hashtagText = {props.match.params.hashtagText}
                                    />
                            }
                        />

                        <Route
                            path="/upload"
                            exact={true}
                            render={(props) =>
                                <UploadImageContainer {...props}/>
                            }
                        />

                        <Route
                            path="/"
                            exact={true}
                            render={(props) =>
                                <FeedContainer {...props}/>
                            }
                        />
                        <Route
                            path="/login"
                            exact={true}
                            render={(props) =>
                                <LoginContainer {...props}/>
                            }
                        />
                        <Route
                            path="/signup"
                            exact={true}
                            render={(props) =>
                                <SignupContainer {...props}/>
                            }
                        />
                        <Route
                            path="/privacy"
                            exact={true}
                            render={(props) =>
                                <PrivacyPolicy/>
                            }
                        />
                        <Route
                            path={"/details/:imageId"}
                            exact={true}
                            render={(props) =>
                                <DetailsContainer {...props}
                                                  imageId={props.match.params.imageId}
                                />
                            }
                        />
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default WinstagramContainer
