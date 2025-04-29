// 25501. 재귀의 귀재
const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
input.shift();

let count = 0;

function recursion(s, l, r) {
  if (l === 0) count = 0;

  count++;
  if (l >= r) return 1;
  else if (s[l] !== s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

const answer = input.map((s) => {
  return `${isPalindrome(s)} ${count}`;
});

console.log(answer.join("\n"));
