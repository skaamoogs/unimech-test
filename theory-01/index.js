const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
    }, 3000);
  })(i);
}
