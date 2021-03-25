import React from 'react';
import '../css/userheader.style.client.css'

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
    }

    componentDidMount() {
      this.setState({
        user: this.props.userData
      })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.user !== this.props.userData) {
            this.setState({
                user: this.props.userData,
                email: this.props.userData && this.props.userData.email,
                role: this.props.userData && this.props.userData.userType,
                handle: '',
                initialImage: this.props.userData && this.props.userData.profileImageUrl,
                s3URL: this.props.profileImg
            })
        }
    }


    state = {
        files: [],
        user: this.props.userData,
        // firstName: this.props.userData.firstName,
        // lastName: this.props.userData.lastName,
        email: this.props.userData && this.props.userData.email,
        role: this.props.userData && this.props.userData.userType,
        handle: '',
        initialImage: this.props.userData && this.props.userData.profileImageUrl,
        s3URL: this.props.profileImg
    };

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    uploadProfilePicture(array) {
        console.log(this.state.files);
        array.forEach(file => {
            this.props.uploadProfilePic(file);
        })
    }

    onFilesAdded(evt) {
        console.log("On file added");
        const files = evt.target.files;
            const array = this.fileListToArray(files);
            this.setState({files: array})
            this.uploadProfilePicture(array);
        // }
    }

    openFileDialog() {
        this.fileInputRef.current.click();
    }

    render() {
        return (
                <div className="container">
                    <div className="pt-5" >
                        <figure className="borderall" onClick={this.openFileDialog}>
                            <img className="card-img-top" src={this.props.profileImg === '' ? this.state.initialImage : this.props.profileImg}  width="100"/>
                            <input
                                ref={this.fileInputRef}
                                className="FileInput"
                                type="file"
                                multiple
                                onChange={this.onFilesAdded}
                            />
                        </figure>
                        <button className="btn-block btn-primary w-auto btn-md m-2" onClick={this.openFileDialog}>Upload new image</button>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="userNameFld" className="col-sm-2 col-form-label">
                            Handle
                        </label>
                        <div className="col-sm-10">
                            <div className="form-control wbdv-field wbdv-username bg-light" id="usernameFld">
                              {this.props.userData && this.props.userData.handle}
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="emailFld" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-email"
                                   id="emailFld"
                                   type="email"
                                   onChange={(e) => this.setState({
                                       email: e.target.value })}
                                   defaultValue={this.props.userData && this.props.userData.email}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="roleFld" className="col-sm-2 col-form-label">
                            Role
                        </label>
                        <div className="col-sm-10">
                            <select className="form-control wbdv-field wbdv-role"
                                    id="roleFld"
                                    title="Role"
                                    name="role"
                                    onChange={(e) => {
                                      console.log(e.target.value)
                                      this.setState({
                                        role: e.target.value })
                                    }}
                                    defaultValue={this.props.userData && this.props.userData.userType}>
                                <option value={0}>
                                    Normal User
                                </option>
                                <option value={1}>
                                    Business User
                                </option>
                                <option value={2}>
                                    Admin
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <button className="btn-block btn-success btn-lg wbdv-button wbdv-update" type="submit"
                             onClick={() => {
                                    console.log(this.state.role)
                                   let newUser = {
                                     profileImageUrl: this.props.profileImg === '' ? this.state.initialImage : this.props.profileImg ,
                                     email: this.state.email,
                                     userType: this.state.role
                                   };
                                   this.props.editProfile(newUser)

                             }}>
                                Update
                            </button>
                        </div>
                    </div>

                </div>

            )}
}

export default EditProfile
