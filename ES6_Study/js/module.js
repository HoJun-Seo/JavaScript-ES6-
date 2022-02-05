// 상수 내보내기
export const NAME = "서호준"

// 배열 내보내기
export let oddNumbers = [1,3,5,7,9]

// 클래스 내보내기
export class Student{
    constructor(name){
        this.name = name;
    }
}

const sayHello = name => console.log(`제 이름은 ${name} 입니다.`);
const sayBye = () => console.log(`안녕히 계세요`);

export {sayHello, sayBye};