// Ques1

function is_arr(val) {
  if (Array.isArray(val)) return true;
  return false;
}

console.log(is_arr("w3resources"));
console.log(is_arr([1, 2, 3, 4]));

// Ques2
function array_Clone(arr) {
  return arr.slice(0, arr.length);
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Ques3
function first(x, n) {
  if (n == null) {
    return x[0];
  }
  if (n < 0) {
    return [];
  }

  return x.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// Ques 4

var myColor = ["Red", "Green", "White", "Black"];

// by default separated by ,

console.log(myColor.join());
console.log(myColor.join(","));
console.log(myColor.join("+"));

// Ques5

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

console.log(arr1.filter((item) => item === "a").length);
