/*
计算两个数组的交数组

注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
 */

function sameArr(arrA , arrB) {
	for (let i = 0; i < arrA.length; i++) {
		let site = arrB.indexOf(arrA[i]);

		if( site !== -1 ){
			let flag = site;

			for (let k = site + 1 , j = i + 1 ; k < arrB.length; k++ , j++) {
				if( arrB[k] === arrA[j] ){
					flag = k;
				}
			}

			if( flag !== site )
				return getSameArr(arrB , site , flag);
		}
	}

	return [];
}

function getSameArr(arr , site , flag) {
	return arr.join('').substr(site , flag + 1).split('').map( item => parseInt(item));
}

console.log(sameArr([1, 2, 2, 1],[2, 2]));
console.log(sameArr([1, 2, 2, 6],[2, 6]));
console.log(sameArr([1, 2, 2, 1, 3],[2, 1]));
console.log(sameArr([1, 2, 2, 1],[1, 2]));
console.log(sameArr([1, 2, 2, 1],[1, 1]));