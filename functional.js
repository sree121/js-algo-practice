exports.functional = function() {
  const radius = rad => {
    return Math.PI * rad ** 2;
  };

  const calculate = (arr, func) => {
    const out = [];
    for (i = 0; i < arr.length; i++) {
      out.push(func(arr[i]));
    }
    return out;
  };

  const res = calculate([12, 3, 4], radius);

  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `${JSON.stringify(res)}`;
};
