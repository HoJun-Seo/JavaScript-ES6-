// // 다중 element 에 동시에 접근해보자.
// var var3 = document.getElementsByTagName("input");
// // 위와 같이 여러개 존재하는 input 태그에 접근하면 
// // 각 태그에 해당하는 배열이 변수에 담기게 된다.
// console.log(var3);

// // id 값에 어떤 값을 입력하고, 제출 버튼을 클릭하면
// // 브라우저에서 입력한 값을 출력하는 기능을 구현해보자.

// function getInputValue(){
//     // id 값을 받는 input 태그는 첫번째 요소로 있기 때문에 인덱스를 0 으로 잡아준 후 value 값을 받아온다.
//     var inputValue = document.getElementsByTagName("input")[0].value; 
//     // alert() -> 경고창을 표시하는 메소드 를 활용하여 입력한 값을 출력시킨다.
//     alert(inputValue);
// }

// function a(callback){
//     //setTimeout 에 a 함수 내용을 작성해줌과 동시에, a 함수의 모든 프로세스가 끝나면
//     // 인자로 넘어온 callback 함수를 실행시킨다.
//     setTimeout(function(){
//         console.log("2초가 걸리는 a 함수");
//         callback(); // callback 함수 실행
//     }, 2000)
// }

// function b(){
//     console.log("a 다음에 실행되어야 하는 b 함수");
// }

// a(b);

// if(true){
//     // let 으로 변수를 선언하면 블록 스코프를 가지게 된다.
//     let num = 3;
//     console.log(num);

//     // let 키워드로 만들어진 변수는 동일한 이름으로 다시 선언할 수 없다.
//     let num = 7;
// }

// console.log(num);

// if(true){
//     const num = 5;
//     console.log(num);

//     num = 11;
// }

// const obj = {
//     'key' : 'value'
// };

// console.log(obj.key);

// obj.key = 'changeValue';

// console.log(obj.key);

// const name = "hojun";
// // console.log("안녕, 내 이름은 " + name + " 이야");
// console.log(`안녕, 내 이름은 ${name} 이야`);

// console.log("총 금액은 " + (10+5) + "입니다.");
// console.log(`총 금액은 ${10+5} 만원 입니다.`);

let homework = true;
console.log(`아 숙제 ${homework ?  "다했다" : "아직 다 못했어"}`);