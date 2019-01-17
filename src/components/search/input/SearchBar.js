import React, {Component} from 'react';
import {connect} from "react-redux";
import {handleChangeSearchValue, handleSearch} from "../../../actions/userActions";

class SearchBar extends Component {

    onSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.props.searchValue)
    };

    render() {
        return (
            <form className="form-row" onSubmit={this.onSubmit}>
                <div className="col-12 col-md-9">
                    <input type="text"
                           value={this.props.searchValue}
                           onChange={e=>this.props.handleChangeSearchValue(e.target.value)}
                           className="form-control form-control-lg"
                           placeholder="Type any username here"/>
                </div>
                <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    searchValue: state.user.searchValue
});

export default connect(mapStateToProps, {handleSearch, handleChangeSearchValue})(SearchBar)