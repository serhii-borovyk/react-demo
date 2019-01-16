import React, {Component} from 'react';

export default class SearchBar extends Component {
    state = {
        searchValue: ""
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.searchValue);
        this.props.handleSearch(this.state.searchValue)
    };

    onChange = e => {
        this.setState({searchValue: e.target.value})
    };

    render() {
        return (
            <form className="form-row" onSubmit={this.onSubmit}>
                <div className="col-12 col-md-9">
                    <input type="text"
                            defaultValue={this.state.searchValue}
                           onChange={this.onChange} className="form-control form-control-lg" placeholder="Type any username here"/>
                </div>
                <div className="col-12 col-md-3">
                    <button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
                </div>
            </form>
        );
    }
}
