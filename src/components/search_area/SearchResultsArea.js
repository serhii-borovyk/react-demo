import React, {Component} from 'react';

export default class SearchResultsArea extends Component {
    render() {
        return (
            <div className="form-group purple-border col-6 col-md-6">
                <h2><span className="badge badge-secondary col-12 col-md-12">JSON result</span></h2>
                <textarea className="col-12 col-md-12 form-control" rows="9" id="searchResult" readOnly={true}
                          value={JSON.stringify(this.props.users, null, "  ")}/>
            </div>
        );
    }
}
