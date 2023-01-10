function add(num1, num2) {
  return num1 + num2;
}
add(1, 1);

function getPromise() {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}

getPromise().then(data => {
  console.log(data);
});
