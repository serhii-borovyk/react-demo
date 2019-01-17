import React, {Component} from 'react';
import {connect} from "react-redux";
import {handleHistoryClick} from "../../../actions/userActions";


class SearchHistoryElement extends Component {
    render() {
        const {element} = this.props;
        console.log("SearchHistoryElement", this.props);
        return (
            <button type="button" onClick={()=>this.props.handleHistoryClick(element)} className="list-group-item list-group-item-action">
                {element}
            </button>
        );
    }
}

const mapStateToProps = state => ({
    searchHistory: state.user.searchHistory
});

export default connect(mapStateToProps, {handleHistoryClick})(SearchHistoryElement)