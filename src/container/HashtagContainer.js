import React from "react";
import {connect} from "react-redux";
import HashtagComponent from "../component/HashtagComponent";
import service from "../service/HashtagService"
import imageService from "../service/ImageService"
import {findHashtag} from "../actions/hashtagAction";

class HashtagContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.findImagesForHashtag(this.props.hashtagText)
    this.setState({
      images: this.props.images,
      hashTagText: this.props.hashtagText
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(this.state.images);
    if(this.state.hashTagText !== this.props.hashtagText) {
      console.log("me2");
      this.props.findImagesForHashtag(this.props.hashtagText);
      this.setState({
        ...this.state,
        hashTagText: this.props.hashtagText
      })

      console.log("hello")
    }
  }

  state = {
    images: this.props.images,
    hashTagText: this.props.hashtagText
  }

  render() {
    return (
        <HashtagComponent title={this.props.hashtagText}
            images={this.props.images}/>
    )
  }
}

const stateToPropertyMapper = (state) => ({
  images: state.hashtags.images
});

const dispatchToPropertyMapper = (dispatch) => {
  return {
    findImagesForHashtag: (hashtagText) => {
      if(hashtagText !== "" && hashtagText !== " ") {
        imageService.getAllImagesForHashTag(hashtagText)
            .then(response => {
              dispatch(findHashtag(response))
            })
      }
    }
  }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(HashtagContainer)
