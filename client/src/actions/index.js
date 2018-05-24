import axios from 'axios';
import { FETCH_HOTELS, CLEAR_HOTELS } from './types';

export const fetchHotels = query => async dispatch => {
    // Clear the array of hotels to show loading spinner
    dispatch({ type: CLEAR_HOTELS });
    
    let url = '/api/hotels?';
    if (query && query.name) {
        url += `name=${query.name}&`;
    }
    if (query && query.stars !== "all") {
        url += `stars=${query.stars}`;
    }
    const res = await axios.get(url);
    // Timeout to simulate database response
    setTimeout(() => {
        dispatch({ type: FETCH_HOTELS, payload: res.data });
    }, 300);
}