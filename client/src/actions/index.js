import axios from 'axios';
import { FETCH_HOTELS } from './types';

export const fetchHotels = query => async dispatch => {
    const res = await axios.get(`/api/hotels`);
    dispatch({ type: FETCH_HOTELS, payload: res.data });
}