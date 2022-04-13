import { combineReducers } from 'redux';
import movieReducer from './reducers/movieReducer';
import detailMovieReducer from './reducers/detailMovieReducer';

export default combineReducers({ movieReducer, detailMovieReducer });
