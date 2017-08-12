
function narcissus(num) {
	num = num + '';
	let sum = 0 ;
	for (let i = 0; i < num.length; i++) {
		sum += Math.pow(parseInt(num[i]) , 3);
	}
	return sum === parseInt(num);
}

function loop1000(){
	for (let i = 0; i < 1000; i++) {
		if(narcissus(i))
			console.log(i);
	}
}

loop1000();