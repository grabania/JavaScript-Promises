// var sequence = get('example.json').then(doSomething).then(doSomethingElse);
// new Promise(function(resolve, reject) {
// 	resolve('hi'); //works
// 	resolve('bye'); //can't happen a second time
// });

// const promisedPresent = getPresent();
// promisedPresent
// 	.then((present) => console.log('Great present!', present))
// 	.catch((error) => console.log('No present :(', error));

// function getPresent() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('Your present!');
// 		}, 5000); // 5 seconds
// 	});
// }

// getPresent().then(returnToTheShop).then(buyNewiPhone).then((iPhone) => iPhone.openTypeOfWeb());

// const myPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('Gotowe!'), 5000);
// });

// setTimeout(() => {
// 	myPromise.then((val) => console.log(val));
// }, 6000);

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('working...');
// 		resolve('this is from promise');
// 	}, 800);
// }).then((response) => {
// 	console.log('end!');
// 	console.log(response);
// });

/*
 *  Making appointment - use Promise instead callbacks in the code below:
 */

// const getUserData = (callback) => {
// 	setTimeout(() => {
// 		console.log('1. get user data');
// 		callback();
// 	}, 800);
// };

// const validateData = (callback) => {
// 	setTimeout(() => {
// 		console.log('2. validate');
// 		callback();
// 	}, 900);
// };

// const registerUser = (callback) => {
// 	setTimeout(() => {
// 		console.log('3. register');
// 		callback();
// 	}, 400);
// };

// const sendEmail = (callback) => {
// 	setTimeout(() => {
// 		console.log('4. send email');
// 		callback();
// 	}, 200);
// };

// getUserData(() => {
// 	validateData(() => {
// 		registerUser(() => {
// 			sendEmail(() => {
// 				console.log('end!');
// 			});
// 		});
// 	});
// });

const getUserData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('1. get user data');
			resolve({ name: 'John' });
		}, 800);
	});
};

const validateData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('2. validate');
			resolve();
		}, 900);
	});
};

const registerUser = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('3. register');
			resolve();
		}, 400);
	});
};

const sendEmail = (callback) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('4. send email');
			resolve('Email has been sent');
		}, 200);
	});
};

getUserData()
	.then((res) => {
		console.log(res);
		validateData(res);
	})
	.then(registerUser)
	.then(sendEmail)
	.then((res) => {
		console.log('end!');
		console.log(res);
	});
