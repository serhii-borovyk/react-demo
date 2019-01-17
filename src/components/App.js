import React, {Component} from 'react';
import '../App.css';
import SearchBar from "./search/input/SearchBar";
import SearchResultsArea from "./search/results/json/SearchResultsArea";
import SearchHistoryArea from "./search/history/SearchHistoryArea";
import SearchResultsTable from "./search/results/table/SearchResultsTable";

class App extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="App col-12">
                            <SearchBar/>
                            <div className="container">
                                <div className="row top-buffer">
                                    <SearchResultsArea/>
                                    <SearchHistoryArea/>
                                </div>
                                <div className="row top-buffer">
                                    <SearchResultsTable/>
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
