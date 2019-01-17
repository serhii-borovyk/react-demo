import {CHANGE_SEARCH_VALUE, GET_USERS, HISTORY_CLICK} from "../actions/types";

const initialState = {
    users: undefined,
    searchValue: '',
    searchHistory: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            console.log("REDUCE GET_USERS", action.payload);
            return {
                ...state,
                users: action.payload.users,
                searchValue: action.payload.searchValue,
                searchHistory: state.searchHistory.concat(action.payload.searchValue)
            };
        case HISTORY_CLICK:
            console.log("REDUCE", GET_USERS, action.payload);
            return {
                ...state,
                users: action.payload.users,
                searchValue: action.payload.searchValue
            };
        case CHANGE_SEARCH_VALUE:
            console.log("REDUCE", CHANGE_SEARCH_VALUE, action.payload);
            return {
                ...state,
                searchValue: action.payload.searchValue
            };
        default:
            return state;
    }

};