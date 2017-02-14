export default function (state = null, action){
	// console.log(action.type);

	switch(action.type){
	case "getWeather":
		// Do some stuff
		console.log(action.payload);
		return (action.payload);
	case "somethingElse":
		// do some other stuff
		console.log("SHouldn't see this!")
		return {reallyStupid:"stupid"}
	}
	return state;
}