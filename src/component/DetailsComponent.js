import React from "react";
import "../css/details.style.client.css"
import {Link} from "react-router-dom";

class DetailsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props.sessionUser)
  }

  state = {
    alert: false,
    bought: false,
  };

  closeAlertMessage = () =>
      this.setState({
        alert: false
      });

  buyProduct = () =>
      this.setState({
        alert: true,
        bought: true
      });

  render() {
    return(
        <div className="container">
          <div className={this.state.alert === true ? "alert alert-success text-center mt-2" : "d-none"}>
            <div className="row">
              <h6 className="ml-auto">Product Bought</h6>
              <i className="fa fa-times ml-auto mr-4" onClick={this.closeAlertMessage}/>
            </div>
          </div>
          <div className='row justify-content-center mt-4'>
            <img src={this.props.image && this.props.image.imageUrl} alt="#" width={500} height={500}/>
          </div>
          <div className="row justify-content-center">
            <Link to={`/user/${this.props.image && this.props.image.userHandle}`}
                  onClick={(e) => {
                    if(this.props.sessionUser !== undefined && this.props.image !== undefined) {
                      if(this.props.image.userHandle === this.props.sessionUser.handle) {
                        e.preventDefault();
                      }
                    }
                    else if(this.props.sessionUser === undefined || this.props.image === undefined) {
                      e.preventDefault()
                    }
                  }}>
              <h3>@{this.props.image && this.props.image.userHandle}</h3>
            </Link>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="card main-content">
              <div className="card-body">
                <div className="row">
                  {
                    this.props.image &&
                    <h5 className={this.props.image.price === 0 ? "d-none" : "float-left text-muted"}>Price : {this.props.image.price}</h5>
                  }
                </div>
                <div className="row ml-auto">
                  {
                    this.props.image && this.props.image.hashTags.map(ht =>
                        ht.hashTagText !== undefined &&
                        <h6 key={ht.hashTagText} className="mr-4 text-muted">#{ht.hashTagText}</h6>
                    )
                  }
                </div>
                {
                  this.props.image && this.props.sessionUser &&
                  <div>
                    <div className={this.props.image.userHandle === this.props.sessionUser.handle ? "d-none" : "row mt-2"}>
                      <button className="btn-success btn btn-block"
                              onClick={this.buyProduct}
                              disabled={this.state.bought}>
                        Buy
                      </button>
                    </div>
                    <div className={this.props.image.userHandle === this.props.sessionUser.handle ? "row mt-2" : "d-none"}>
                      <button className="btn-danger btn btn-block"
                              onClick={() => this.props.deleteImage(this.props.image)}>
                        Delete
                      </button>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
    )
  }
}


export default DetailsComponent
