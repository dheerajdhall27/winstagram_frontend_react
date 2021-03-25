import React from 'react';
import '../css/userheader.style.client.css'


class HashtagHeaderComponent extends React.Component {
    render() {
        return(
            <div  className="borderset row py-lg-5 pl-lg-5">
                    <div className="row ml-auto mr-auto">
                        <h1 className="mr-2"> #{this.props.text === " " ? "Enter query in the search bar" :this.props.text} </h1>

                    </div>
            </div>
        )
    }
}

export default HashtagHeaderComponent
