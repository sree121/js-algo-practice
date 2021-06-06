exports.func1 = function() {
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
  function Insertion(arr) {
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

  var result = Insertion([3, 2, 4, 1, 11, 23]);
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `${JSON.stringify(result)}`;
};
