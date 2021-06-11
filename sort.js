exports.sort = function() {
  //swap function
  function swap(arr, idx1, idx2) {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
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
  // Pivot is a position in array where all items in left side of array should be less than pivot and right side should be more than pivot
  function pivot(arr, start = 0, end = arr.length + 1) {
    var pivot = arr[start];
    var swapI = start;

    for (var i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapI++;
        swap(arr, swapI, i);
      }
    }
    return swapI;
  }

  function QuickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotI = pivot(arr, left, right);

      QuickSort(arr, left, pivotI - 1);
      QuickSort(arr, pivotI + 1, right);
    }
    return arr;
  }
  var result = QuickSort([10, 2, 3]);

  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `${JSON.stringify(result)}`;
};
