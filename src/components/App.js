import React, {Component} from 'react';
import '../App.css';
import SearchBar from "./search/input/SearchBar";
import SearchResultsArea from "./search/results/json/SearchResultsArea";
import axios from 'axios';
import SearchHistoryArea from "./search/history/SearchHistoryArea";
import SearchResultsTable from "./search/results/table/SearchResultsTable";

class App extends Component {

    state = {
        users: undefined,
        searchHistory: []
    };

    handleSearch = searchValue => {
        axios.get(`http://localhost:8080/users/${searchValue}`)
            .then(result => this.setState({
                searchHistory: this.state.searchHistory.concat(searchValue),
                users: result.data
            }));
    };

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="App col-12">
                            <SearchBar handleSearch={this.handleSearch}/>
                            <div className="container">
                                <div className="row top-buffer">
                                    <SearchResultsArea users={this.state.users}/>
                                    <SearchHistoryArea searchHistory={this.state.searchHistory}/>
                                </div>
                                <div className="row top-buffer">
                                    <SearchResultsTable users={this.state.users}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
