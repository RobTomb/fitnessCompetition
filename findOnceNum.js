/*
题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
eg: function findNum(arr){ ... }
 */

function findNum(arr) {
	for (var i = 0; i < arr.length; i++) {
		if( arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) )
			return arr[i];
	}
	return false;
}


console.log(findNum([1,1,2,2,3]));
console.log(findNum([1,1,4,3,3]));
console.log(findNum([1,3,2,2,3]));

/*
'use strict';

//返回26及以下的数字对应的字母
function toLetter(num) {
  return String.fromCharCode("a".charCodeAt(0) - 1 + num);
}

//根据数字得出相应的“单词”v0
function getReleventWord0(num) {
  let quotient = parseInt(num / 26);
  let remainder;
  if (num % 26 === 0) {
    remainder = 26;
    quotient--;
  } else {
    remainder = num % 26;
  }

  let word = "";
  if (num > 26) {
    word += toLetter(quotient);
  }
  word += toLetter(remainder);
  return word;
}

function get_letter_interval_2(number_a, number_b) {
  let res = [];
  let step = number_a < number_b ? 1 : -1;
  for (let i = number_a; i !== number_b + step; i += step) {
    res.push(getReleventWord0(i));
  }
  return res;
}

module.exports = get_letter_interval_2;

 */

 /*
 'use strict';

//返回26及以下的数字对应的字母
function toLetter(num) {
  return String.fromCharCode("a".charCodeAt(0) - 1 + num);
}

//根据数字得出相应的“单词”v1
function getReleventWord1(num) {
  let digits = [];

  while (num > 0) {
    let quotient = parseInt(num / 26);
    let remainder;
    if (num % 26 === 0) {
      remainder = 26;
      num = quotient - 1;
    } else {
      remainder = num % 26;
      num = quotient;
    }
    digits.push(remainder);
  }

  let res = "";
  for (let i = digits.length - 1; i >= 0; i--) {
    res += toLetter(digits[i]);
  }
  
  return res;
}

function get_letter_interval_2(number_a, number_b) {
  let res = [];
  let step = number_a < number_b ? 1 : -1;
  for (let i = number_a; i !== number_b + step; i += step) {
    res.push(getReleventWord1(i));
  }
  return res;
}

module.exports = get_letter_interval_2;


  */
