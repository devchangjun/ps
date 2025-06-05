const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./1260/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);
let graph = Array.from({ length: n + 1 }, (_, i) => []);

for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  let [a, b] = input[i + 1].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let visit = Array(n + 1).fill(false);
let answer_dfs = [];
function dfs(v) {
  if (visit[v] === true) return;
  visit[v] = true;
  answer_dfs.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let nxt = graph[v][i];
    if (visit[nxt] === false) {
      dfs(nxt);
    }
  }
}

for (let i = 0; i < graph.length; i++) {
  graph[i].sort((a, b) => a - b);
}

dfs(v);
console.log(answer_dfs.join(" "));

let answer_bfs = [];

function bfs(v) {
  let queue = [v]; // 시작 정점을 큐에 넣는다.
  let visit = Array(n + 1).fill(false); // 방문 여부를 저장하는 배열을 초기화한다.

  // 큐가 빌 때까지 반복한다.
  while (queue.length > 0) {
    // 큐에서 하나 꺼낸다.
    let node = queue.shift();

    // 방문했으면 다음 노드
    if (visit[node] === true) continue;

    // 방문안했으면 방문 처리
    visit[node] = true;
    // 방문한 정점을 기록
    answer_bfs.push(node);

    // 현재 정점과 연결된 노드들 확인
    for (let i = 0; i < graph[node].length; i++) {
      let next = graph[node][i]; // 연결된 노드 확인
      if (visit[next] === false) {
        queue.push(next);
      }
    }
  }
}

bfs(v);
console.log(answer_bfs.join(" "));
