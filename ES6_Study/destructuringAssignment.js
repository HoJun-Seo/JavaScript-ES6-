const song = {
    author : '비',
    date : '2020-05-31',
    title : '깡',
    body : '화려한 조명이 나를 감싸네에에에에에'
};

const {author : name, date : time, title : jaemok, body : lyrics} = song;
console.log(name, time, jaemok, lyrics);

// 구조분해 할당의 가장 큰 장점은 외부 API 를 통해 받아온 복잡한 객체 정보에서 
// 원하는 정보만 빼내서 활용할 수 있다는 점이다.

// 만약 카카오에서 제공하는 API 에서 원하는 정보를 빼내려면 다음과 같은 형태로 뽑아낼 수 있을 것이다.
var kakaoResponse = {
    // 각종 JSON 객체 정보들이 있다고 가정한다.
}
const {item_name, approved_at} = kakaoResponse;

// 그런데 여기서 객체 내부에 객체가 있는 형태인 중첩 객체 데이터의 경우엔 어떻게 정보를 뽑아 올 수 있을까?
// 다음과 같이 코드를 작성해 줄 수 있다.
// const {item_name, approved_at, amount.total} = kakaoResponse;
// console.log(item_name, approved_at, amount.total);
// amound 라는 내부 중첩 객체안에 있는 속성인 total 속성을 가져온다.

// 그런데 중첩 객체 내부에 있는 속성을 쓰고 싶을 때마다 매번 이렇게 작성하면 조금 귀찮을 수도 있다.
// 하나의 이름으로서 데이터를 받고 싶으면 어떻게 해야 할까?
const {item_name, approved_at, amount : {total}} = kakaoResponse;
console.log(item_name, approved_at, total);

// 위와 같이 amount 객체의 total 속성을 가져오면 굳이 amount.total 과 같이 표현할 필요 없이
// 곧장 total 필드를 쓰는 것이 가능하다.

// 그럼 이제 이걸 각 속성의 이름을 그대로 사용하는 것이 아닌, 직접 만든 변수 안에 적재해보자.
const {item_name : name, approved_at : date, amount : {total : totalPrice}} = kakaoResponse;
console.log(name, date, totalPrice);