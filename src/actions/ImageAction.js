import {
    SEPIA,
    GET_IMAGES,
    UPLOAD_IMAGE,
    GRAYSCALE,
    SHARPEN,
    BLUR,
    S3,
    DELETE_IMAGE
} from "../common/constants";


export const uploadImage = (image) => ({
    type: UPLOAD_IMAGE,
    newImage: image
})

export const getImages = (images) => ({
    type: GET_IMAGES,
    images: images
})

export const sepiaFilter = (imageURL) => ({
    type: SEPIA,
    sepiaURL: imageURL
})

export const grayscaleFilter = (imageURL) => ({
    type: GRAYSCALE,
    grayscaleURL: imageURL
})

export const sharpenFilter = (imageURL) => ({
    type: SHARPEN,
    sharpenURL: imageURL
})


export const blurFilter = (imageURL) => ({
    type: BLUR,
    blurURL: imageURL
})

export const uploadToS3 = (imageURL) => ({

    type: S3,
    S3URL: imageURL
})

export const deleteImage = (image) => ({
    type: DELETE_IMAGE,
    image: image
})

