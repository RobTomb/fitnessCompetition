
function median(arr) {
	arr = arr.sort( (x , y)=>{ return x - y ;})
	return arr.length % 2 === 0 ? arr[arr.length / 2 - 1] / 2 + arr[arr.length / 2] / 2 : arr[parseInt(arr.length / 2)];
}

console.log(median([3,2,1,4,5]));
console.log(median([3,2,1,4]));