let N = 3;
let M = 3;

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
