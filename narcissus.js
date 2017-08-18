function narcissus(num) {

	let numList = (num + '').split('').map( (item) => parseInt(item) );

	return numList.reduce( (sum , item) =>{
		return sum += Math.pow(item , 3);
	} , 0) === parseInt(num);
}

function loop1000(){
	for (let i = 0; i < 1000; i++) {
		if(narcissus(i))
			console.log(i);
	}
}

loop1000();