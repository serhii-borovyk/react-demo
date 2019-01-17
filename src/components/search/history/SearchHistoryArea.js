import React, {Component} from 'react';
import {connect} from "react-redux";

const EMPTY = "Empty search criteria";

class SearchHistoryArea extends Component {
    render() {
        console.log("SearchHistoryArea", this.props);
        return (
            <div className="form-group green-border col-6 col-md-6">
                <h2><span className="badge badge-secondary col-12 col-md-12">Search history</span></h2>
                <textarea className="col-12 col-md-12 form-control" rows="9" id="searchResult" readOnly={true}
                          value={this.props.searchHistory
                              .map((current, index) => `${index + 1}: ${current || EMPTY}\n`)
                              .reduce((a, b) => a + b, "")
                          }/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchHistory: state.user.searchHistory
});

export default connect(mapStateToProps)(SearchHistoryArea)
