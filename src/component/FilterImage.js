import React, {Component} from 'react'
import '../css/upload.style.client.css'
import Dropzone from './Dropzone'

class FilterImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: [],
            uploading: false,
            hashtags: "",
            uploadComplete: false,
            filterState: true,
            selectedFilter: "",
            filterList: ["Sepia", "Grayscale", "Sharpen", "Blur"],
            price: 0
        };

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
    }
    componentDidMount() {
        // if(this.props.user === undefined) {
        //     this.props.history.push("/login/");
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.selectedFilter !== prevState.selectedFilter) {
            console.log(this.props.user);
            this.uploadFiles();
        }
        // if(this.props.S3URL !== '' && this.props.S3URL !== undefined) {
        //     this.props.history.push("/feed/");
        // }
    }

    onFilesAdded(files) {
        this.setState({files: files});
        console.log("Upload container file added");
        this.uploadFiles();
    }

    async uploadFiles() {
        this.setState({uploading: true});
        this.state.files.forEach(file => {
            console.log(this.state.selectedFilter)
            switch (this.state.selectedFilter) {
                case "Sepia": //{
                        console.log(file.name);
                        this.props.sepiaFilter(file, file.name);
                    break;
                case "Blur":
                            console.log("about to fetch blur");
                            this.props.blurFilter(file, file.name);
                            break;
                case "Sharpen" :
                            this.props.sharpenFilter(file, file.name);
                            break;
                case "Grayscale" :
                            this.props.grayscaleFilter(file, file.name);
                            break
            }
        });
    }

    getSelectedURL() {
        switch(this.state.selectedFilter) {
            case "Sepia": return this.props.sepiaURL;
            case "Sharpen": return this.props.sharpenURL;

            case "Blur": return this.props.blurURL;
            case "Grayscale": return this.props.grayscaleURL;
            default: return '';
        }
    }

    render() {
        const { uploading} = this.state;

        const content = () => {
            // console.log(this.getSelectedURL())
            switch(true) {
                case this.getSelectedURL() !== '':
                    return <img  src={this.getSelectedURL()} height="550" width="750" />
                case uploading:
                    if(this.state.selectedFilter !== '') {
                        return (<div className='spinner fadein'>
                            <i className="fa fa-5x fa-refresh"/>
                        </div>)
                    } else {
                        return (<div className='text justify-content-center'>
                            Please select a filter
                        </div>)
                    }

                default:
                    return <Dropzone
                        onFilesAdded={this.onFilesAdded}
                        disabled={this.state.uploading || this.state.successfullUploaded}
                    />
            }
        }

        return (
            <div className="container-fluid">
                <div className="row justify-content-center p-4">
                    <ul className="nav nav-pills" hidden={this.state.files.length === 0 ? true: false}>
                        {
                            this.state.filterList &&
                            this.state.filterList.map(filter =>
                                <li className={`nav-item`} key={filter}>
                                    <a className={`nav-link ${filter === this.state.selectedFilter ? 'active':''}`}
                                       onClick={() => {
                                           this.setState({
                                           selectedFilter: filter
                                        })
                                       }}
                                    >
                                      {filter}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="Card">
                    <div className="Upload">
                        <div className="Content justify-content-center pt-5">
                            {content()}
                        </div>
                    </div>
                </div>
                <div hidden={this.props.user && this.props.user.userType !== 1} className="row card price-card ml-auto mr-auto">
                    <div hidden={this.getSelectedURL() === ''? true: false} className="card-body">
                        <span>
                            <div className="row">
                                <h4>Price: </h4>
                                <input className="ml-4" onChange={(e) => {
                                    this.setState({
                                        price: e.target.value
                                    })
                                }} type="number"/>
                            </div>
                        </span>
                    </div>
                </div>
                <div hidden={this.getSelectedURL() === ''? true: false} className="p-5">
                    <input type="textarea" className="m-3 w-50" placeholder="Enter hashtags separated by a space"
                           onChange={(e) => this.setState({
                               hashtags: e.target.value })}/>

                    <button   className="btn-primary" onClick={async () => {
                        fetch(this.getSelectedURL())
                            .then(res => res.blob())
                            .then(blob => {
                                // console.log(this.props.user);

                                this.props.uploadToS3(blob, this.props.user, this.state.hashtags, this.state.price);
                            })
                    }
                    }>Upload</button>
                </div>

            </div>
        )
    }
}

export default FilterImage
