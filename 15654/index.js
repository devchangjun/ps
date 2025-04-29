// 15654. N과 M(5)
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./15654/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number).sort();

let rs = [];
let result = "";
let visit = Array(100001).fill(false);

function recur(num) {
  if (num === M) {
    result += rs.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visit[arr[i]] === false) {
      visit[arr[i]] = true;
      rs.push(arr[i]);
      recur(num + 1);
      visit[arr[i]] = false;
      rs.pop();
    }
  }
}

recur(0);

console.log(result.trim());
