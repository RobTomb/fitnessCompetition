/*
题目：找出数组 arr 中重复出现过的元素
例如：arr = ['a', ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
 */

function repeteItem(arr) {
	let result = [];
	arr.forEach( (element)=>{
		if( arr.indexOf(element) !== arr.lastIndexOf(element) && !result.includes(element) )
			result.push(element);
	})
	return result;
}

console.log(repeteItem(['a' , 'ab', 'ed', 'da', 'a', 'ed', 'b']));
console.log(repeteItem(['a' , 'a', 'a', 'a', 'a']));