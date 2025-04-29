// 15652. N과 M(4)
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./15652/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

let rs = [];
let result = "";
let visit = Array(N + 1).fill(false);

function recur(num, start) {
  if (num === M) {
    result += rs.join(" ") + "\n";
    return;
  }

  for (let i = start; i <= N; i++) {
    rs.push(i);
    recur(num + 1, i);
    rs.pop();
  }
}

recur(0, 1);

console.log(result.trim());
