import {FIND_HASHTAG, UPDATE_HASHTAG_LIST} from "../common/constants";


export const findHashtag = (images) => ({
    type: FIND_HASHTAG,
    images: images
});

export const updateHashTagList = (hashTagList) => ({
    type: UPDATE_HASHTAG_LIST,
    list: hashTagList
});
