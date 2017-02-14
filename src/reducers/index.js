// To make a rootReducer:
// 1. use combineREducers method (redux)
// 2. pass it an Object
// 3. each key will be a peice of application state
// 4. each value will be a single reducer

import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import MovieReducer from './MovieReducer';

const rootReducer = combineReducers({
	weather: WeatherReducer,
	movie: MovieReducer
});

export default rootReducer;