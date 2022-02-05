// const numarr = [1,2,3,4];

// 배열의 길이 알아보기
// console.log(numarr.length)
// 자바스크립트에서는 배열의 길이와 배열에 있는 요소 갯수(개발자가 직접 초기화 해준 요소들)가
// 같은 말일까? 다른 말일까?
// const arr = [];
// arr[2] = 3; // 0,1 번 인덱스에는 아무것도 들어가 있지 않다.(요소 갯수는 1개만 존재한다.)
// console.log(arr.length)
// console.log(arr);
// 요소를 하나만 초기화 해줬음에도 불구하고 배열의 길이로 3이 출력된다.

// 배열의 요소 추가하기
// numarr.push(5, 6);
// // console.log(numarr)

// const result = numarr.concat(7,8);
// console.log(result);
// // 배열 속 요소 빼내가
// numarr.pop(); // 배열의 가장 마지막에 있는 요소를 제거하는 메소드
// console.log(numarr);
// 배열 속 요소 순회하기
const namearr = ["민철", "영수", "영희", "민수"];
// for(let i = 0; i < namearr.length; i++){
//     console.log(namearr[i]);
// }

// namearr.forEach(name => console.log(name))

const oddarr = [1,3,5,7,9];
const newarr = oddarr.map(num => num*2);
// console.log(newarr);
// console.log(oddarr);
// map 과 forEach 의 결정적인 차이점은, 배열을 순회하면서 처리한 결과를 새로운 배열로 리턴받을 수 있다는 것이다.

// 내가 원하는 조건을 만족하는 배열 속 요소 찾기
// const filterarr = oddarr.filter(x => x > 4);
// console.log(filterarr)

const postList = [
    {"date" : "yesterday", "id" : 1},
    {"date" : "yesterday", "id" : 2},
    {"date" : "today", "id" : 3}
]

const yesterdayPost = postList.filter(post => post.date === "yesterday");
console.log(yesterdayPost);