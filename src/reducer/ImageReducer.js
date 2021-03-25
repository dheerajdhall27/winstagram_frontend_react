import {
    SEPIA,
    UPLOAD_IMAGE,
    GET_IMAGES,
    GRAYSCALE,
    BLUR,
    SHARPEN,
    S3,
    DELETE_IMAGE
} from "../common/constants";

const initialState = {
    images: [
        // {
        //     id: 1,
        //     imgURL: "https://s3-us-east-2.amazonaws.com/java-s3-test-wbdv/4d48d039-0e12-4602-a83b-e802439a7ae7",
        //     hashTagText: "test"
        // },
        // {
        //     id: 2,
        //     imgURL: "https://s3-us-east-2.amazonaws.com/java-s3-test-wbdv/brad",
        //     hashTagText: "test"
        // },
        // {
        //     id:3,
        //     imgURL: "https://s3-us-east-2.amazonaws.com/java-s3-test-wbdv/test",
        //     hashTagText: "test"
        // }
    ],
    sepiaURL: '',
    grayscaleURL: '',
    sharpenURL: '',
    blurURL: '',
    S3URL: '',

}


const ImageReducer = (state = {initialState: initialState}, action) => {
    switch(action.type) {
        case UPLOAD_IMAGE: {
            console.log(action.newImage);
            return {
                ...state,
                S3URL: action.newImage
            }}
        case GET_IMAGES:
            return {
                ...state,
                images: action.images
            }
        case SEPIA: {
            console.log("Inside sepia in reducer");
            return {
                ...state,
                images: initialState.images,
                sepiaURL: action.sepiaURL
            }}
        case GRAYSCALE: {
            return {
                ...state,
                grayscaleURL: action.grayscaleURL
            }}
        case BLUR: {
            return {
                ...state,
                blurURL: action.blurURL
            }}
        case SHARPEN: {
            return {
                ...state,
                sharpenURL: action.sharpenURL,
            }}
        case S3: {
            console.log(action.S3URL);
            return {...state,
                S3URL: action.S3URL
            }
        }
        case DELETE_IMAGE:
            return {
                images:state.images.filter(image => image.id !== action.image.id)
            }
        default:
            return {
                ...state
            }
    }

}
export default ImageReducer
