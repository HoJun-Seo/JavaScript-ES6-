// 생성자 함수의 경우
function ComputerClass(name, professor, classno){
	this.name = name; // 여기서 좌변의 this.name 과 우변의 name 은 서로 다른 변수이다. this.name 은 function 내부에서 선언된 함수 자체의 지역 변수이고, name 은 함수 밖에서 부터 들어온 변수이다.
	this.professor = professor;
	this.classno = classno;
	this.printInfo = function(){ // 자바스크립트 에서는 변수 자체의 값으로 함수를 선언해 주는 것이 가능하다.(함수 또한 하나의 객체로 취급되기 때문)
		console.log(this.name + ' 강의' + this.classno + ' 분반입니다. 교수님은 ' + this.professor + ' 입니다.');
	}
}
var class1 = new ComputerClass('운영체제', '이동의', '2');
var class2 = new ComputerClass('데이터베이스', '홍은경', '1');

console.log(class1.printInfo());
console.log(class2.printInfo());

// 자바스크립트 - 객체로서의 함수
// 1. 변수에 대입이 가능하다.
var add = function addSum(num1, num2){
	return num1 + num2;
}
console.log(add(1,2));

// 2. 다른 함수의 인자나 리턴값으로 활용이 가능하다.
console.log("두 수의 합계는 ", add(1,2), " 입니다.");

// 3. 배열, 객체 등의 자료구조에 대입이 가능하다.
var sub = function(num1, num2){
	return num1 - num2;
}

var calculator = [add, sub]; // 배열에 함수를 인자로 넣는 경우
console.log(calculator[0](1,2));
console.log(calculator[1](1,2));

Calculator = {add, sub}; // 객체에 함수를 인자로 넣는 경우
console.log(Calculator.add(2,3));
console.log(Calculator.sub(2,3));