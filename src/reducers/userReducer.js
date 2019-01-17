import {GET_USERS} from "../actions/types";

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
        default:
            return state;
    }

};