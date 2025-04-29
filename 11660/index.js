// 11660. 구간 합 구하기5
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./11660/input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const board = input.slice(1, n + 1).map((str) => str.split(" ").map(Number));
let dp = Array.from(Array(n + 1), () => new Array(n + 1).fill(0));

// 누적합 배열
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + board[i - 1][j - 1] - dp[i - 1][j - 1];
  }
}

let answer = "";

for (let i = n + 1; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  answer += String(dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]) + "\n";
}

console.log(answer);
