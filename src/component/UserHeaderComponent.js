import React from 'react';
import '../css/userheader.style.client.css'
import {Link} from "react-router-dom";


class UserHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({
            user: this.props.userData,
            handle: this.props.handle
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.userData !== prevProps.userData) {
            this.setState({
                ...this.state,
                user: this.props.userData
            })
        }
    }

    state = {
        user: this.props.userData,
        handle: ''
    };

    uploadImage = () => {
        return(
            this.props.uploadImage({
                "imgURL": "https://s3-us-east-2.amazonaws.com/java-s3-test-wbdv/test",
                "hashTags":[
                    {
                        "hashTagText": "beaches"
                    }
                ]
            })
        )
    }

    render() {
        return(
            <div>
                {this.state.user &&
                    <div  className="borderset row py-lg-5 pl-lg-5">
                        <div className="col-3 pt-3">
                            <figure className="borderall">
                                {this.props.userData && <img className="card-img-top" src={this.props.userData.profileImageUrl}/>}
                            </figure>
                        </div>
                        <div className="col-9 pt-3">
                            <div className="row pl-2">

                                    <h1 className="mr-2 user-name">{ this.state.handle && this.state.handle}</h1>
                                {
                                    this.props.userData && this.props.userData.handle === this.props.sessionUserData.handle &&
                                    <div>
                                        <Link to={`/user/${this.state.user.handle}/edit`} className=" ml-2 btn">
                                            <i className="fa fa-2x fa-pencil"/>
                                        </Link>
                                        <Link to={`/user/${this.state.user.id}/info`} className="btn">
                                            <i className="fa fa-2x fa-gear"/>
                                        </Link>
                                    </div>
                                }
                                {
                                    this.props.userData &&
                                    <div hidden={this.props.userData.userType !== 1}>
                                        <button className="btn mt-2 btn-success ml-3" disabled={true}>
                                            BUSINESS
                                        </button>
                                    </div>
                                }
                            </div>
                            <div className="row py-2 follower-data">
                                <span className="px-3">{this.props.userData && this.props.userData.imageList.length} posts </span>
                                <span className="px-3"> 120 followers </span>
                                <span className="px-3"> 420 following </span>
                            </div>
                            <div className="row user-name-full">
                                <h4 className="py-2 ml-2"> {this.state.user.firstName + ' ' + this.state.user.lastName} </h4>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default UserHeaderComponent
