let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./2559/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map((n) => parseInt(n));

let arr = input[1].split(" ").map((n) => parseInt(n));
let prefix = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  prefix[i] = prefix[i - 1] + arr[i - 1];
}

let ret = -1000000;
for (let i = K; i <= N; i++) {
  const sum = prefix[i] - prefix[i - K];
  ret = sum > ret ? sum : ret;
}

console.log(ret);
