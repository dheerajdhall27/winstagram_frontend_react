import React from "react";
import {connect} from "react-redux";
import service from "../service/ImageService";
import userService from "../service/UserService";
import FilterImage from "../component/FilterImage";
import {getUserInformation} from "../actions/UserAction";
import {blurFilter, grayscaleFilter, sepiaFilter, sharpenFilter, uploadImage, uploadToS3} from "../actions/ImageAction";

class UploadImageContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.user === undefined) {
            this.props.history.push("/login");
        }
    }

    render() {
        return(
            <FilterImage history={this.props.history}
                         S3URL={this.props.S3URL}
                         user={this.props.user}
                         sepiaURL={this.props.sepiaURL}
                         sharpenURL={this.props.sharpenURL}
                         blurURL={this.props.blurURL}
                         grayscaleURL={this.props.grayscaleURL}
                         uploadToS3={(blob, user, hashtags, price) => this.props.uploadToS3(blob, user, hashtags, price, this.props.history)}
                         sepiaFilter={(file, fileName) => this.props.sepiaFilter(file, fileName)}
                         sharpenFilter={(file, fileName) => this.props.sharpenFilter(file, fileName)}
                         blurFilter={(file, fileName) => this.props.blurFilter(file, fileName)}
                         grayscaleFilter={(file, fileName) => this.props.grayscaleFilter(file, fileName)}/>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    sepiaURL: state.images.sepiaURL,
    sharpenURL: state.images.sharpenURL,
    blurURL: state.images.blurURL,
    grayscaleURL: state.images.grayscaleURL,
    S3URL: state.images.S3URL,
    user: state.user.user
});

const dispatchToPropertyMapper = (dispatch) => ({
    sepiaFilter: (file, fileName) =>
        service.sepia(file, fileName).then(response => {
            response.text().then((newblob) => {
                let image = "data:image/jpeg;base64,"+newblob;
                dispatch(sepiaFilter(image))
            })
        }),
    sharpenFilter: (file, filename) =>
        service.sharpen(file, filename).then(response =>{
            response.text().then((newblob) => {
                let image = "data:image/jpeg;base64,"+newblob;
                dispatch(sharpenFilter(image))
            })
        }),
    blurFilter: (file, filename) =>
        service.blur(file, filename).then(response =>{
            response.text().then((newblob) => {
                let image = "data:image/jpeg;base64,"+newblob;
                dispatch(blurFilter(image))
            })
        }),
    grayscaleFilter: (file, filename) =>
        service.grayscale(file, filename).then(response =>{
            response.text().then((newblob) => {
                let image = "data:image/jpeg;base64,"+newblob;
                dispatch(grayscaleFilter(image))
            })
        }),
    uploadToS3: (blob, user, hashtags, price, history) => {
        service.uploadToS3(blob).then((response) => {
            if(!response.ok) {
                console.log("response not okay"+ response);
                return "";
            } else {
                response.text().then((data) => {
                    dispatch(uploadToS3(data));
                    let stringArray = hashtags.split(' ');
                    console.log(stringArray.length)
                    console.log(stringArray);
                    let hashTagArray = [];
                    for(let i = 0 ; i < stringArray.length; i++) {
                        if(stringArray[i] === "" || stringArray[i] === undefined) {
                            continue;
                        }
                        hashTagArray.push({
                            hashTagText: stringArray[i]
                        });
                    }

                    let obj   = {
                        imageUrl: data,
                        hashTags: hashTagArray,
                        price: price
                    };
                    service.uploadImage(obj)
                        .then(image => {
                            console.log(image)
                            dispatch(uploadImage(image.imageUrl))
                            history.push("/feed")
                        });
                });
            }
        })
    }
});



export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(UploadImageContainer)
