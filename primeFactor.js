
/*题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。*/

function isPrime(num){
	num = parseInt(Math.sqrt(num));
	for (var i = 2; i < num ; i++) {
		if( num % i === 0 ){
			return false;
		}
	}
	return true;
}

function nextPrime(num){
	for( num += 1 ;  ; num += 1 ){
		if( isPrime(num) )
			break;
	}
	return num;
}

function primeFactor(num){
	let result = '';
	let prime = 2;
	while( num !== 1 ){
		if( num % prime === 0 ){
			result += prime.toString();
			num = num / prime;
		}
		else{
			prime = nextPrime(prime);			
		}
	}
	console.log(result);
}
primeFactor(90);