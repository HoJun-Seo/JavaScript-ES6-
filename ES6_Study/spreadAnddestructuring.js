// const student = {
//     name : `김구름`
// }; 

// // 아래의 univStudent 객체에 student 객체가 가지고 있는 속성들을 모두 포함하면서,
// // univStudent 만의 속성을 추가하려면 어떻게 해야할까?
// const univStudent = {
//     ...student, // student 객체 상속
//     major : '컴퓨터공학과' // 속성 추가
// }

// console.log(univStudent.name);

// const koreanUnivStudent = {
//     ...univStudent,
//     region : `Seoul`
// }

// console.log(koreanUnivStudent);

// 배열에서의 Spread
const oddNumbers = [1,3,5,7,9];
const evenNumbers = [2,4,6,8,10];

const allNumbers = [...oddNumbers, ...evenNumbers];
// console.log(allNumbers)

// allNumbers 안에 있는 숫자들을 모두 더해주는 함수 sum 을 만들어보자.
// sum 함수는 인자로 allNumbers 의 요소들을 받는다.

function sum(...rest){
    let result = 0;
    rest.forEach(num => result+=num);

    return result;
}

const result = sum(...allNumbers);
console.log(result);

const koreanUnivStudent = {
    name : `김구름`,
    major : '컴공',
    region : `서울`
};

// 여기서 koreanUniStudent 객체를 이루는 속성들이 엄청나게 많다고 가정해보자.
// 그리고 그 중에서 몇 개의 속성을 제외한 객체를 따로 만들고 싶다면 어떻게 해야할까?
// 즉, 기존 객체의 부분집합에 해당하는 객체를 만들려면 어떻게 해야할까?

const {name, ...rest} = koreanUnivStudent;
// 위의 코드는 koreanUnivStudent 에서 name 속성을 제외한 나머지 속성들로 객체를 만든다는 의미이다.
console.log(rest);