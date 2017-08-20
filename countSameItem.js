
/*
判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}

 */

function countSameItem(str) {
	let result = {};
	for(item of str){
		if( item in result )
			result[item] ++;
		else
			result[item] = 1;
	}
	return result;
}

console.log(countSameItem('aaaaabbdbdbb'));