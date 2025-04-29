// 1912. 연속합
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./1912/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map((n) => parseInt(n));

let prefix = Array(n + 1).fill(-10000000);

for (let i = 1; i <= n; i++) {
  let sum = prefix[i - 1] + arr[i - 1];
  prefix[i] = sum > arr[i - 1] ? sum : arr[i - 1];
}

console.log(Math.max(...prefix));
