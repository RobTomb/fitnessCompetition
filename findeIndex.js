/*
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
要求：不要使用for，while循环
 */

function findIndex(arr , item) {
	arr.forEach( (num , index)=>{
		if(item === num)
			console.log(index);
	})
}
findIndex([1, 3, 7, 1 ,4] , 1);