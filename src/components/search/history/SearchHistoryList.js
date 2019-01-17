import React, {Component} from 'react';
import {connect} from "react-redux";
import SearchHistoryElement from "./SearchHistoryElement";

class SearchHistoryList extends Component {
    render() {
        console.log("SearchHistoryList", this.props);
        return (
            <div className="form-group green-border col-6 col-md-6">
                <h2><span className="badge badge-secondary col-12 col-md-12">Search history</span></h2>
                <div className="list-group" hidden={!this.props.searchHistory.length}>
                    {this.props.searchHistory
                        .map(current => <SearchHistoryElement element={current}/>)}

                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    searchHistory: state.user.searchHistory
});

export default connect(mapStateToProps)(SearchHistoryList)
