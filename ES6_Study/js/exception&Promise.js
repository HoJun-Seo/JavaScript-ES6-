// try{
//     console.log("try 실행")
//     throw new Error("개발자가 정의한 에러 발생");
// }
// catch(e){
//     console.log("catch 실행");
//     // 익셉션 객체의 message 필드만 출력
//     console.log(e.message);
// }
// finally{
//     console.log("finally 실행");
// }

function sayHello(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`제 이름은 ${name} 입니다.`);
            resolve(name); // 비동기 처리가 잘 수행되었을 때 name 변수 리턴

            // reject();
        }, 2000);
    })
}

// 비동기 함수가 잘 호출된 경우 then 실행,
// 그렇지 않은 경우 catch 실행
// sayHello("호준")
//     .then((name) => {console.log(`${name} 님 반갑습니다.`)})
//     .catch(() => {console.log(`함수가 제대로 실행되지 않았습니다.`)})

async function foo(name){
    // sayHello() 함수의 resolve() 함수가 반환해주는 name 값을 받아온다.
    const resultName = await sayHello(name);
    console.log(`2초 뒤 실행될 코드`);
}

foo(`호준`);