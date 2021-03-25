import {FIND_HASHTAG, UPDATE_HASHTAG_LIST} from "../common/constants";

const initialState = {
    hashtags: [
        // { _id: "1234", title: "test" },
        // { _id: "1235", title: "movies" },
        // { _id: "1236", title: "beaches" }
    ],
    images: [
        // {
        //     id: 1,
        //     imgURL: "https://s3-us-east-2.amazonaws.com/java-s3-test-wbdv/4d48d039-0e12-4602-a83b-e802439a7ae7",
        //     hashTagText: "test"
        // },
        // {
        //     id:2,
        //     imgURL: "https://s3-us-east-2.amazonaws.com/java-s3-test-wbdv/brad",
        //     hashTagText: "test"
        // },
        // {
        //     id:3,
        //     imgURL: "https://s3-us-east-2.amazonaws.com/java-s3-test-wbdv/test",
        //     hashTagText: "test"
        // }
    ]
}

const hashtagReducer = (state = {initialState: initialState}, action) => {
    switch(action.type) {
        case FIND_HASHTAG:
            return {
                ...state,
                images: action.images
            };
        case UPDATE_HASHTAG_LIST:
            return{
                ...state,
                hashtags: action.list
            };
        default:
            return {...state}
    }

}
export default hashtagReducer
