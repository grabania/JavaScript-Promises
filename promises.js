var sequence = get('example.json').then(doSomething).then(doSomethingElse);
new Promise(function(resolve, reject) {
	resolve('hi'); //works
	resolve('bye'); //can't happen a second time
});

const promisedPresent = getPresent();
promisedPresent
	.then((present) => console.log('Great present!', present))
	.catch((error) => console.log('No present :(', error));

function getPresent() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Your present!');
		}, 5000); // 5 seconds
	});
}

getPresent().then(returnToTheShop).then(buyNewiPhone).then((iPhone) => iPhone.openTypeOfWeb());

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Gotowe!'), 5000);
});

setTimeout(() => {
	myPromise.then((val) => console.log(val));
}, 6000);
