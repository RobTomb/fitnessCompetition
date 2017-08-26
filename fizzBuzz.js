/*
给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.
 */

function getStr(num) {
	let result = '';
	if(num % 3 === 0)
		result += 'fizz';
	if(num % 5 === 0)
		result += 'buzz';
	return result === '' ? num : result;
}

function loopn(n) {
	let i = 1 ;
	while( i !== n+1 ){
		console.log(getStr(i));
		i++ ;
	}
}

loopn(15);