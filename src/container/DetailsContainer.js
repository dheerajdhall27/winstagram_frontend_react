import React from "react";
import {connect} from "react-redux";
import DetailsComponent from "../component/DetailsComponent";
import detailsService, {getImageDetails} from "../service/DetailsService"
import imageService from "../service/ImageService"
import {updateImageDetails} from "../actions/DetailsActions";
import {deleteImage} from "../actions/ImageAction"

class DetailsContainer extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getImageDetails(this.props.imageId);
    this.setState({
      image: this.props.image,
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  state = {
    image: this.props.image,
  };

  render() {
    return (
      <DetailsComponent image={this.props.image}
                        sessionUser={this.props.currentUser}
                        deleteImage={(image) => {
                          this.props.deleteImage(image)
                          this.props.history.push(`/feed`)
                        }}/>
    )
  }

}


const stateToPropertyMapper = (state) => ({
  image: state.details.image,
  currentUser: state.user.user
});

const dispatchToPropertyMapper = (dispatch) => {
  return {
    getImageDetails: (imageId) => {
      detailsService.getImageDetails(imageId)
        .then(image => {
          // console.log(image)
          if(image !== null) {
            dispatch(updateImageDetails(image))
          }
        })
    },

    deleteImage: async (image) => {
      await imageService.deleteImage(image)
        .then(response => {
          if(response.ok === true) {
            dispatch(deleteImage(image))
              alert("Delete was successful");
          }
        })
    }
  }
};

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(DetailsContainer)
