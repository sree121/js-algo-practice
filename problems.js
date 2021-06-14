exports.problems = function() {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // given 2 array find if both array has same number with squared values and not repeated
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        return false;
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false;
      }
    }
    return true;
  }

  // let result = same([2, 2, 2,1,1], [4, 4, 4,1,1]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 2
  // Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as

  function validAnagram(str1, str2) {
    let lookup = {};
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      // if any change in character lookup will return zero {a:0,b:0,c:1}
      //if multiple character then will return zero
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
    return true;
  }

  //var result = validAnagram('qbcd', 'dcba');

  function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
      debugger;
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }

  // var result = countUniqueValues([1, 2, 2, 5, 7, 7, 9, 9]);

  // max sub array of sum substring
  // input : array , num : 3

  function findMaxSum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) {
      return null;
    }
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  //time complexity o(n)
  // var result = findMaxSum([1, 2, 2, 5, 7, 7, 9, 9], 3);

  //recursion factorial
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }
  // var result = factorial(11);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // collectodd values

  function collectODD(arr) {
    let result = [];

    function helper(inp) {
      if (inp.length == 0) {
        return;
      }
      if (inp[0] % 2 != 0) {
        result.push(inp[0]);
      }
      helper(inp.slice(1));
    }
    helper(arr);
    return result;
  }
  // var result = collectODD([2, 1, 2, 23, 4]);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // palindrome
  function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,
  function flatten(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
      if (Array.isArray(oldArr[i])) {
        newArr = newArr.concat(flatten(oldArr[i]));
      } else {
        newArr.push(oldArr[i]);
      }
    }
    return newArr;
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function findNum(str) {
    var regex = /\d+/g;
    var string = 'you can enter maximum 500 choices';
    var matches = string.match(regex);
    return matches;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // var result = findNum('the secret');

  // reverse sring and letters
  function reverse(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }
  // var result = reverse('the secret');

  function sumPair(arr, sum) {
    const pairMap = new Map();
    for (i = 0; i < arr.length; i++) {
      if (pairMap.has(sum - arr[i])) {
        return true;
      } else {
        pairMap.set(sum - arr[i]);
        console.log(pairMap);
      }
    }
    return true;
  }
  var result = sumPair([1, 2, 6], 5);
  // Write Javascript code!
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `${JSON.stringify(result)}`;
};
