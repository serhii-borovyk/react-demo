import axios from 'axios';
import {GET_USERS} from "./types";

const PROXY = "http://localhost:8080/users/";

export const handleSearch = searchValue => async dispatch => {
    const result = await axios.get(PROXY + searchValue);
    dispatch({
        type: GET_USERS,
        payload: {
            users: result.data,
            searchValue
        }
    })
};