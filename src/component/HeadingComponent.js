import React from 'react'
import {Link} from "react-router-dom";
import Tooltip from "./Tooltip";
import SearchListItem from "./SearchListItem";


class HeadingComponent extends React.Component {

    constructor(props) {
      super(props);
    }
    state = {
        searchText: ' ',
        user: this.props.userData,
        hashTags: this.props.hashTagData
    };

    updateForm = (e) =>{
        this.setState({
            ...this.state,
            searchText: e.target.value
        }, () => {
          if(this.state.searchText.length > 2) {
            this.props.updateHashTags(this.state.searchText);
          }
        })
    };

    componentDidMount() {
      this.setState({
        ...this.state,
        user: this.props.userData,
        hashTags: this.props.hashTagData,
      })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevProps.userData !== this.props.userData) {
        this.setState({
          ...this.state,
          user: this.props.userData
        })
      }

      if(prevProps.hashTags !== this.props.hashTags) {
        this.setState({
          ...this.state,
          hashTags: this.props.hashTagData
        })
      }
    }

  searchList = () => {
        return(
            <div className="tooltip-body">
                <ul className="list-group">
                    {

                        this.props.hashTagData && this.props.hashTagData.map(hashtag =>
                            <SearchListItem key={hashtag.id} hashTagId={hashtag.id}
                                select={() => {
                                    this.setState({
                                      ...this.state,
                                      searchText: ''
                                    });
                                    this.props.history.push(`/search/${hashtag.hashTagText}`)
                                }}
                                hastagText={hashtag.hashTagText}/>
                        )
                    }
                </ul>
            </div>
        )
    }


    render() { return (
        <nav className="navbar sticky-top navbar-expand-sm justify-content-between navbar-light bg-info">
            <div className="navbar-collapse" id="navbarSupportedContent">
              <div className="row justify-content-center w-100">
                <div className="col-0 col-sm-4 col-md-3 col-lg-4">
                  <Link to={"/feed"} className="text-decoration-none nav-item text-center" >
                    <span className="d-none d-md-block pl-3 navbar-brand mb-0 h1 wbdv-label text-white">Winstagram</span>
                  </Link>
                </div>
                {/*<div className="col-6 col-sm-4 col-md-5 col-lg-4">*/}
                  <Tooltip tooltip={this.searchList} placement="top" trigger="click" >
                    <input onChange={this.updateForm} className="form-control wbdv-field wbdv-new-course" type="search"
                           placeholder="search"   aria-label="Search"/>
                  </Tooltip>
                {/*</div>*/}
                <div className="col-6 col-sm-4 col-md-4 col-lg-4 nav-item">
                  <div className="row">
                    <div className="ml-auto mr-4">
                      <Link to={`/feed`} className=" btn bg-info navbar-right" hidden={this.state.user == undefined ? true: false}>
                        <i className="fa fa-home text-light"/>
                      </Link>
                      <Link to={`/user/${this.state.user && this.state.user.handle}`} className=" btn bg-info navbar-right" hidden={this.state.user == undefined ? true: false}>
                        <i className="fa fa-user text-light"/>
                </Link>
                <Link to={`/search/`} className=" btn bg-info navbar-right">
                        <i className="fa fa-hashtag text-light"/>
                      </Link>
                      <Link to={`/upload`} className=" btn bg-info navbar-right" hidden={this.state.user == undefined ? true: false}>
                        <i className="fa fa-camera-retro text-light" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </nav>
    ) }

}
export default HeadingComponent
