var sequence = get('example.json').then(doSomething).then(doSomethingElse);
new Promise(function(resolve, reject) {
	resolve('hi'); //works
	resolve('bye'); //can't happen a second time
});
