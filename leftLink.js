/*
题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function XXX(str,val){}
*/

function leftLink(str , val) {
	str = str.split('->');
	str = str.filter( (item)=>{ return item !== val.toString()});
	return str = str.join('->');
}

console.log(leftLink('1->2->3->3->4->5->3',3));