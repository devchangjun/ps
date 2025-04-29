// 2304. 창고다각형

const fs = require("fs");
let [N, ...column] = fs.readFileSync("./2304/input.txt").toString().trim().split("\n");
N = Number(N);
for (let i = 0; i < N; i++) {
  column[i] = column[i].trim().split(" ").map(Number);
}

// 컬럼 정렬
column.sort((a, b) => {
  if (a[0] > b[0]) return 1;
  else return -1;
});

let maxValue = -10;
let maxIndex = 0;

// 최고 인덱스 뽑기
for (let i = 0; i < N; i++) {
  if (maxValue < column[i][1]) {
    maxValue = column[i][1];
    maxIndex = i;
  }
}

// 왼쪽 누적합 계산
let leftValue = 0;
let leftIndex = 0;
let currentLeftMaxValue = column[0][1];
let startX = column[0][0];
for (let i = startX; i < column[maxIndex][0]; i++) {
  const nextY = column[leftIndex + 1][1]; // 다음 y값을 비교

  // 현재 maxy 값보다 nextY값이 크다면
  if (currentLeftMaxValue <= nextY && i === column[leftIndex + 1][0]) {
    currentLeftMaxValue = nextY; // 3
  }

  if (i === column[leftIndex + 1][0]) {
    leftIndex++;
  }

  leftValue += currentLeftMaxValue; // 3 더하기
}

// 오른쪽 누적합 계산
let rightValue = 0;
let rightIndex = column.length - 1;
let currentRightMaxValue = column[column.length - 1][1];
let endX = column[column.length - 1][0];

for (let i = endX; i > column[maxIndex][0]; i--) {
  const nextY = column[rightIndex - 1][1];

  if (currentRightMaxValue <= nextY && i === column[rightIndex - 1][0]) {
    currentRightMaxValue = nextY;
  }

  if (i === column[rightIndex - 1][0]) {
    rightIndex--;
  }

  rightValue += currentRightMaxValue;
}

console.log(rightValue + leftValue + column[maxIndex][1]);
