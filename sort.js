exports.sort = function() {
  //swap function
  function swap(arr, i, low) {
    return ([arr[i], arr[low]] = [arr[low], arr[i]]);
  }
  /// bubble sort
  function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  // var result = bubbleSort([3, 2, 4, 1, 11, 23]);
  // i j
  // 0 0

  //selecion sort
  // find lowest and swap with index at the end of the loop
  // time complexity o(n^2)
  function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
      let low = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[low] > arr[j]) {
          low = j;
        }
      }
      if (i !== low) [arr[i], arr[low]] = [arr[low], arr[i]];
    }
    return arr;
  }
  /*
           low
  [3, 2, 4, 1, 11, 23]
   i            j 
  */

  //Insertion sort
  // function Insertion(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     let low = i;
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[low] > arr[j]) {
  //         low = j;
  //       }
  //     }
  //     if (i !== low) [arr[i], arr[low]] = [arr[low], arr[i]];
  //   }
  //   return arr;
  // }

  // Merge sort - divide and merge recusrsively
  //time complexity o(n log n)
  // length = 8; 2*2*2
  // length = 32; 2^5
  // 10   2,3
  function merge(arr1, arr2) {
    let i = 0,
      j = 0,
      result = [];
    //while (i < arr1.length || j < arr2.length) creates infinite loop until one condition is satisfied
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); //[10]
    let right = mergeSort(arr.slice(mid)); // [2,3]
    return merge(left, right);
  }

  // var result = mergeSort([10, 2, 3]);

  //Quick sort

  //find swap index where item is greater than pivot in array should be pushed.
  function pivot(arr, start = 0, end = arr.lenght + 1) {
    var pivot = arr[start];
    var swapI = start;

    for (var i = start + 1; i < arr.lenght; i++) {
      if (pivot > arr[i]) {
        swapI++;
        swap(arr, swapI, i);
      }
    }
    return arr;
  }
  var result = pivot([10, 2, 3]);
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `${JSON.stringify(result)}`;
};
