const request = require('request');

var getWeather = (latitude, longitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/9ade2f6c152b5288e6657f6de92758ff/${latitude},${longitude}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather.')
		}		
	});
}

module.exports.getWeather = getWeather;