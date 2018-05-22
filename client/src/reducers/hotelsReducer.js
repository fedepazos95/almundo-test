import { FETCH_HOTELS } from '../actions/types';

const hotelsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_HOTELS:
            return action.payload;
        default:
            return state;
    }
}

export default hotelsReducer;