var asyncAdd = (a,b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
			} else {
				reject('Arguments must be numbers.');
			}
		},1500);
	});
}


// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve('Hey. It worked!');
// 		reject('Unable to fulfill promise.');
// 	}, 2500);
// });

// somePromise.then((message) => {
// 	console.log('Sucess: ', message);
// }, (errorMessage) => {
// 	console.log('Error: ', errorMessage);
// });

// this way would not handle the error for the second promise
asyncAdd(5, '4').then((res) => {
	console.log('Result:', res);
	return asyncAdd(res, 33);
}, (errorMessage) => {
	console.log(errorMessage);
}).then((res) => {
	console.log('Second Result: ', res);
}, (errorMessage) => {
	console.log(errorMessage);
});

asyncAdd(5, '4').then((res) => {
	console.log('Result:', res);
	return asyncAdd(res, 33);
}).then((res) => {
	console.log('Second Result: ', res);
}).catch((errorMessage) => {
	console.log(errorMessage)
});