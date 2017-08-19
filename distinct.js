/*
数组去重
例如：arr = ['s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
 */
function distinct(arr) {
	return arr.reduce( (result , item)=>{
		if(!result.includes(item))
			result.push(item);
		return result;
	} , [])
}

console.log(distinct(['s', 'a', 's', 'b', 'a',1,'1',1]));