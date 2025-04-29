// 2603. 줄세우기
const input = require("fs").readFileSync("dev/stdln").toString().trim().split("\n");

function solution(params) {
  let answer = [];

  params.map((value) => {
    let arr = value.split(" ");

    for (let i = 0; i < arr.length; i++) {
      answer.splice(Number(arr[i]), 0, i + 1);
    }
  });

  answer.reverse();
  console.log(answer.join(" "));
}

solution(input);
