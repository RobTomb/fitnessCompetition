/*
题目：查找斐波纳契数列中第 N 个数。

所谓的斐波纳契数列是指：
前2个数是 0 和 1 。
第 i 个数是第 i-1 个数和第i-2 个数的和。
斐波纳契数列的前10个数字是：
0, 1, 1, 2, 3, 5, 8, 13, 21, 34 …
 */

function fibonacciSeries(num) {
	if(num === 1)
		return 0;
	if(num === 2)
		return 1;
	return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
}

console.log(fibonacciSeries(10));