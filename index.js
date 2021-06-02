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

var result = countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `${JSON.stringify(result)}`;
