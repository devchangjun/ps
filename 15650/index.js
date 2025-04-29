// 15650. N과 M(2)
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./15650/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

let rs = [];
let visit = Array(N + 1).fill(false);

function recur(num, start) {
  if (num === M) {
    console.log(rs.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    if (visit[i] === true) {
      continue;
    }
    visit[i] = true;
    rs.push(i);
    recur(num + 1, i + 1);
    visit[i] = false;
    rs.pop();
  }
}

recur(0, 1);
