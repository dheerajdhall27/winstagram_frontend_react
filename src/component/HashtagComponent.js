import React from 'react'
import HashtagHeaderComponent from "./HashtagHeaderComponent";
import HashtagGrid from "./HashtagGrid";

class HashtagComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.hashtagText !== prevProps.hashtagText) {
        }
    }

    render() {
        return (
            <div>
                <div className="container ">
                    <div >
                        <HashtagHeaderComponent text={this.props.title}/>
                    </div>
                    <HashtagGrid images={this.props.images}/>
                </div>

            </div>
        )
    }
}

export default HashtagComponent
