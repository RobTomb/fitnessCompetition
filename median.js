
function median(arr) {
	arr = arr.sort( (x , y)=>{ return x - y ;})
	let median = 0;
	if( arr.length % 2 === 0 )
		median = arr[arr.length / 2 - 1] / 2 + arr[arr.length / 2] / 2;
	else
		median = arr[parseInt(arr.length / 2)]
	return median;
}

console.log(median([3,2,1,4,5]));
console.log(median([3,2,1,4]));