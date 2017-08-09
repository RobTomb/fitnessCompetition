
function fibonacciSeries(num) {
	if(num === 1)
		return 0;
	if(num === 2)
		return 1;
	return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);;
}

console.log(fibonacciSeries(10));