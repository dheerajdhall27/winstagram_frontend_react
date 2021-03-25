import React, {Component} from 'react'

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
            hashtags: [],
            price : '',
        };
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="Card">
                        <div className="Upload">
                            <div className="Content justify-content-center pt-5">
                                <img src={this.state.imageURL} width={550} height={750}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadImage;
