const request = require('request');

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
	}, (error, response, body) => {
			if (error){
				callback('Unable to connect to Google server.')
			} else if (body.status === 'ZERO_RESULTS') {
				callback('Unable to find the address')
			} else if (body.status === 'OK') {
				callback(undefined, {
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				})
			}
	});
}

module.exports.geocodeAddress = geocodeAddress;

// 9ade2f6c152b5288e6657f6de92758ff

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

