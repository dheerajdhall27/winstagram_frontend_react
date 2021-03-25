import React, { Component } from 'react'
import '../css/dropzone.style.client.css'

class Dropzone extends Component {
    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded(evt) {
        console.log("On file added");
        if (this.props.disabled) return;
        const files = evt.target.files;
        // if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        // }
    }

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    onDragOver(evt) {
        evt.preventDefault();

        if (this.props.disabled) return;

        this.setState({ hightlight: true });
    }

    onDragLeave() {
        this.setState({ hightlight: false });
    }

    onDrop(event) {
        event.preventDefault();

        if (this.props.disabled) return;

        const files = event.dataTransfer.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            console.log("Drom the dropzone"+files.item(1));
            this.props.onFilesAdded(array);
        }
        this.setState({ hightlight: false });
    }

    render() {
        return (
            <div className="Dropzone"
                 onDragOver={this.onDragOver}
                 onDragLeave={this.onDragLeave}
                 onDrop={this.onDrop}
                 onClick={this.openFileDialog}
                 style={{ cursor: this.props.disabled ? "default" : "pointer" }}
            >
                <i className="fa fa-3x fa-upload"></i>

                <input
                    ref={this.fileInputRef}
                    className="FileInput"
                    type="file"
                    multiple
                    onChange={this.onFilesAdded}
                />
                <span>Upload Image</span>
            </div>
        );
    }
}

export default Dropzone;
