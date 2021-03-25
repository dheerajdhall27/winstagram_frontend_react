import React from 'react';
import HashtagGrid from "./HashtagGrid";
import ImageComponent from "./ImageComponent";
import "../css/imagegallery.style.client.css"

class Feed extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props.images)
        this.setState({
            user: this.props.user,
            images: this.props.images
        })
    }


    state = {
        user: this.props.user,
        images: this.props.images
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.user !== prevState.user) {
            this.setState({
                ...this.state,
                user: this.props.user
            })
        }

        if(this.state.images !== prevState.images) {
            this.setState({
                ...this.state,
                images: this.props.images
            })
        }

    }

    render() {
        return (
            <div className="container">
                <div   className="feed-gallery pt-2">
                    {
                        this.props.images && this.props.images.slice(0).reverse().map(image =>
                            <ImageComponent key={this.props.images.indexOf(image)} uniqueId={image._id} source={image.imageUrl}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Feed
