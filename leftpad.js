function leftpad(str , count , strA) {
	return str.padStart(count - str.length ,strA);
}

console.log(leftpad('hello',20,'1'));
/*
实现一个left-pad函数
leftpad功能，就是字符串前面拼指定字符到固定长度，比如
leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
三个参数，
第一个：当前字符串；
第二个：需要返回字符串的长度
第三个：用来拼接的字符串
 */
