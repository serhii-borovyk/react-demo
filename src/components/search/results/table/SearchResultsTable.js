import React, {Component} from 'react';
import SearchResultsTableRow from "./SearchResultsTableRow";
import {connect} from "react-redux";

class SearchResultsTable extends Component {
    render() {
        console.log("SearchResultsTable", this.props.users);
        let {users} = this.props;
        return (
            <table className="table table-striped" hidden={!users}>
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Address</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map(u => <SearchResultsTableRow key={u.id} user={u}/>)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    users: state.user.users
});

export default connect(mapStateToProps, null)(SearchResultsTable)