import axios from 'axios';
import { FETCH_HOTELS } from './types';

export const fetchHotels = query => async dispatch => {
    let url = '/api/hotels?';
    if (query && query.name) {
        url += `name=${query.name}&`;
    }
    if (query && query.stars !== "all") {
        url += `stars=${query.stars}`;
    }
    const res = await axios.get(url);
    dispatch({ type: FETCH_HOTELS, payload: res.data });
}