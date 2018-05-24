import { FETCH_HOTELS, CLEAR_HOTELS } from '../actions/types';

const hotelsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_HOTELS:
            return action.payload;
        case CLEAR_HOTELS:
            return null;
        default:
            return state;
    }
}

export default hotelsReducer;