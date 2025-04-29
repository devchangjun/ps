// 15649. N과 M(1)
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./15649/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

let rs = [];
let visit = Array(N + 1).fill(false);

function recur(num) {
  if (num === M) {
    console.log(rs.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visit[i] === false) {
      visit[i] = true;
      rs.push(i);
      recur(num + 1);
      visit[i] = false;
      rs.pop();
    }
  }
}

recur(0);
