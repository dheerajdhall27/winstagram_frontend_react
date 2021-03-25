import {GET_IMAGE_DETAILS} from "../common/constants";

const initialState = {
  image: {
    id:'',
    imageUrl: '',
    price: '',
    hashTags: []
  }
};

const DetailsReducer = (state = {initialState: initialState}, action) => {
  switch (action.type) {
    case GET_IMAGE_DETAILS:
      return{
        image: action.image
      };
    default:
      return {
        ...state
      };
  }
};

export default DetailsReducer
