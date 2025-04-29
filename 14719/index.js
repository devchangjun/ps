// 14719. 빗물

const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
input = input[1].split(" ").map(Number);

let maxIndex = 0;
let maxValue = 0;

// max값 뽑음
for (let i = 0; i < input.length; i++) {
  if (input[i] >= maxValue) {
    maxValue = input[i];
    maxIndex = i;
  }
}

// 왼쪽 누적합
let leftAcc = 0;
let leftMaxValue = input[0];
let leftSum = 0;

for (let i = 0; i < maxIndex; i++) {
  if (leftMaxValue <= input[i]) {
    leftMaxValue = input[i];
  }

  leftAcc += leftMaxValue;
  leftSum += input[i];
}

let leftResult = leftAcc - leftSum;

// 오른쪽 누적합

let rightAcc = 0;
let rightMaxValue = input[input.length - 1];
let rightSum = 0;

for (let i = input.length - 1; i > maxIndex; i--) {
  if (rightMaxValue <= input[i]) {
    rightMaxValue = input[i];
  }
  rightAcc += rightMaxValue;
  rightSum += input[i];
}

let rightResult = rightAcc - rightSum;
console.log(rightResult + leftResult);
