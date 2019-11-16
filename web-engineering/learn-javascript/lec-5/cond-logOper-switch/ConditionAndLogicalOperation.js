function testCondition(num) {
	if(num % 5 == 0  && num % 4 == 0) {
		console.log('fiz buz');
	}else if (num % 5 == 0) {
		console.log('fiz');
	} else if (num % 4 == 0) {
		console.log('Buz');
	} 
}
testCondition(20);
var num = 5;
var result = num == 5 ? 'pass' : 'fail';
console.log(result);