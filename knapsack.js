function knapsack(items, capacity){
  // This implementation uses dynamic programming.
  // Variable 'memo' is a grid(2-dimentional array) to store optimal solution for sub-problems,
  // which will be later used as the code execution goes on.
  // This is called memoization in programming.
  // The cell will store best solution objects for different capacities and selectable items.
  var memo = [];

  // Filling the sub-problem solutions grid.
  for (var i = 0; i < items.length; i++) {
    // Variable 'cap' is the capacity for sub-problems. In this example, 'cap' ranges from 1 to 6.
    var row = [];
    for (var cap = 1; cap <= capacity; cap++) {
      row.push(getSolution(i,cap));
    }
    memo.push(row);
  }

  // The right-bottom-corner cell of the grid contains the final solution for the whole problem.
  return(getLast());

  function getLast(){
    var lastRow = memo[memo.length - 1];
    return lastRow[lastRow.length - 1];
  }

  function getSolution(row,cap){
    const NO_SOLUTION = {maxValue:0, subset:[]};
    // the column number starts from zero.
    var col = cap - 1;
    var lastItem = items[row];
    // The remaining capacity for the sub-problem to solve.
    var remaining = cap - lastItem.w;

    // Refer to the last solution for this capacity,
    // which is in the cell of the previous row with the same column
    var lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
    // Refer to the last solution for the remaining capacity,
    // which is in the cell of the previous row with the corresponding column
    var lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;

    // If any one of the items weights greater than the 'cap', return the last solution
    if(remaining < 0){
      return lastSolution;
    }

    // Compare the current best solution for the sub-problem with a specific capacity
    // to a new solution trial with the lastItem(new item) added
    var lastValue = lastSolution.maxValue;
    var lastSubValue = lastSubSolution.maxValue;

    var newValue = lastSubValue + lastItem.v;
    if(newValue >= lastValue){
      // copy the subset of the last sub-problem solution
      var _lastSubSet = lastSubSolution.subset.slice();
      _lastSubSet.push(lastItem);
      return {maxValue: newValue, subset:_lastSubSet};
    }else{
      return lastSolution;
    }
  }
}

// test
var items = [
  {w:70,v:135},
  {w:73,v:139},
  {w:77,v:149},
  {w:80,v:150},
  {w:82,v:156},
  {w:87,v:163},
  {w:90,v:173},
  {w:94,v:184},
  {w:98,v:192},
  {w:106,v:201},
  {w:110,v:210},
  {w:113,v:214},
  {w:115,v:221},
  {w:118,v:229},
  {w:120,v:240},
];

var capacity = 750;
console.log(knapsack(items, capacity));