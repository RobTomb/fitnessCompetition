
function leftLink(str , val) {
	str = str.split('->');
	str = str.filter( (item)=>{ return item !== val.toString()});
	return str = str.join('->');
}

console.log(leftLink('1->2->3->3->4->5->3',3));