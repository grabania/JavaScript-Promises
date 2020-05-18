var sequence = get('example.json').then(doSomething).then(doSomethingElse);
new Promise(function(resolve, reject) {
	resolve('hi'); //works
	resolve('bye'); //can't happen a second time
});

const promisedPresent = getPresent();
promisedPresent
	.then((present) => console.log('Great present!', present))
	.catch((error) => console.log('No present :(', error));
