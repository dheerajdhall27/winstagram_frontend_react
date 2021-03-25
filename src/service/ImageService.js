import {API_URL} from "../common/constants";

const uploadImage = async(image) => {
    const response = await fetch(`${API_URL}images/`, {
        method: "POST",
        body: JSON.stringify(image),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    });
    return await response.json()
};

const getImages = async () => {
    return fetch(`${API_URL}images`, {})
        .then(response => response.json())
};

const uploadToS3 =  async (blob) => {
    const formData = new FormData();
    formData.append("file", blob, "filename");
    const response = await fetch(`${API_URL}/S3Images/uploadImage`, {
        method: "POST",
        body: formData
    })
    return response
};


const sepia = async(file, filename) => {
    const formData = new FormData();
    console.log("Inside sepia");
    formData.append("file", file, filename);
    console.log("Send upload request..");

    const response = await fetch(`${API_URL}/transform/sepia`, {
        method: "POST",
        body: formData,
    });
    return response
};

const grayscale = async(file, filename) => {
    const formData = new FormData();
    formData.append("file", file, filename);
    console.log("Send upload request..");

    const response = await fetch(`${API_URL}/transform/grayscale`, {
        method: "POST",
        body: formData,
    });
    return response
};

const sharpen = async(file, filename) => {
    const formData = new FormData();
    formData.append("file", file, filename);
    console.log("Send upload request..");

    const response = await fetch(`${API_URL}/filter/sharpen`, {
        method: "POST",
        body: formData,
    });
    return response
};

const blur = async(file, filename) => {
    const formData = new FormData();
    formData.append("file", file, filename);
    console.log("Send upload request..");

    const response = await fetch(`${API_URL}/filter/blur`, {
        method: "POST",
        body: formData,
    });
    return response
};

const getAllImagesForHashTag = (hashTagText) =>
    fetch(`${API_URL}images/hashtags/${hashTagText}`)
        .then(response => {
            if(response.ok) {
                return response.json()
            }

            return null;
        })

export const deleteImage = (image) => {
    return fetch(`${API_URL}images/delete/${image._id}`, {
        method: 'DELETE'
    })
}

export default {
    uploadImage,
    uploadToS3,
    getImages,
    sepia,
    blur,
    sharpen,
    grayscale,
    getAllImagesForHashTag,
    deleteImage
}
