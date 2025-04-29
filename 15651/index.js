// 15651. N과 M(3)
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./15651/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

let rs = [];
let result = "";

function recur(num) {
  if (num === M) {
    result += rs.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    rs.push(i);
    recur(num + 1);
    rs.pop();
  }
}

recur(0);

console.log(result.trim());
