exports.func = function() {
  /// bubble sort

  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  // i j
  // 0 0
  // Write Javascript code!
  var result = bubbleSort([3, 2, 4]);
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `${JSON.stringify(result)}`;
};
