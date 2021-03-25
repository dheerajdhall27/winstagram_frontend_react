import {connect} from "react-redux";
import Feed from "../component/Feed";
import service from "../service/ImageService";
import {getImages} from "../actions/ImageAction";
import React from "react";

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getImages()

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.user === undefined) {
      this.props.history.push("/login")
    }
    // console.log(this.props.images);
  }

  render() {
    return (
        <Feed images={this.props.images}
              user={this.props.user}/>
    )
  }
}

const stateToPropertyMapper = (state) => ({
    images: state.images.images,
    user: state.user.user
});

const dispatchToPropertyMapper = (dispatch) => ({
    getImages: () =>
        service.getImages().then(images => {
            // console.log(images)
            dispatch(getImages(images))
        })
});

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(FeedContainer)
