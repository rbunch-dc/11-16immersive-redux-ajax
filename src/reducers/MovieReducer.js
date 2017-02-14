export default function (state = [], action){
	console.log(action.type);
	switch(action.type){
		case 'getMovies':
		console.log('Hooray!! Im am needed');
		return action.payload;
		case 'getWeather':
		// console.log("HEre's the weather info", action.payload)
	}
	return state;
}