class Person {
    // 생성자 선언
    constructor(name){
        this.name = name;
    }

    // method
    sayHello(){
        console.log(`안녕하세요, ${this.name} 입니다.`);
    }
}

// 객체 인스턴스 생성
// const hojun = new Person(`hojun`);
// hojun.sayHello();

class Student extends Person{
    
    constructor(name, school, major){
        super(name); // 부모 생성자를 먼저 만들어준다.
        this.school = school;
        this.major = major;
    }

    // function 을 붙여야 하지 않나...?
     getMajor(params) {
        console.log(`저는 ${this.name} 이며, ${this.school} 학교에 다니고 있고, ${this.major} 입니다.`);
    }
}

const hojun = new Student(`서호준`, '경성대', '소프트웨어 공학과');
hojun.getMajor();

