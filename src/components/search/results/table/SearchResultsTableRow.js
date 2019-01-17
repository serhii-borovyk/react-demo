import React, {Component} from 'react';

export default class SearchResultsTableRow extends Component {
    render() {
        const {user} = this.props;
        console.log("SearchResultsTableRow", user);
        return (
            <tr>
                <th scope="row">{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.sex}</td>
                <td>{user.address}</td>
            </tr>
        );
    }
}
