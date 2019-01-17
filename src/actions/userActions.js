import axios from 'axios';
import {CHANGE_SEARCH_VALUE, GET_USERS, HISTORY_CLICK} from "./types";

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

export const handleHistoryClick = searchValue => async dispatch => {
    const result = await axios.get(PROXY + searchValue);
    dispatch({
        type: HISTORY_CLICK,
        payload: {
            users: result.data,
            searchValue
        }
    })
};

export const handleChangeSearchValue = searchValue => dispatch => {
    dispatch({
        type: CHANGE_SEARCH_VALUE,
        payload: {
            searchValue: searchValue
        }
    })
};
