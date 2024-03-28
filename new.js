// let x = 10, y = 20;
// let z = x + y * 5 / 2;
// console.log(z);


// let a = 10, b = 20;
// let c, d, e;
// c = a % 2;
// d = b % 3;
// e = 3 % a;
// console.log(c);
// console.log(d);
// console.log(e);

//거듭제곱 연산자 **, 증가 연산자 ++, 감소 연산자 --
// console.log(3**3);
// c=0;
// console.log(c++);
// console.log(++c);

//단항 부정 연산자
// c = -c;
// console.log(c);

// 대입연산자 복합 대입 연산자
// let i = 10;
// i += 5;
// console.log(i);
// i -= 5;
// console.log(i);
// i *= 5;
// console.log(i);
// i /= 5;
// console.log(i);

// // 비교 연산자
// console.log(3=='3'); // true
// console.log(3==3); // true
// console.log(3==='3'); // false
// console.log(3===3); // true
// console.log(3!=3); // false
// console.log(3!='3'); // false
// console.log(3!==3); // false
// console.log(3!=='3'); // true
// console.log(3<5); // true
// console.log(3>=5); // false

// let food = "melon";
// switch(food){
//     case "melon":
//         console.log("fruit");
//         break;
//     case "apple":
//         console.log("fruit");
//         break;
//     case "banana":
//         console.log("fruit");
//         break;
//     case "carrot":
//         console.log("fruit");
//         break;
//     default:
//         console.log("It's not fruit andvegetables.");
//         break;
// }

// const member = {id:"kidong", name:"홍길동", age:30 };
// for(let x in member) {
//     console.log(`${x}: ${member[x]}`);
// }

let arr = ["orange", "banana", "apple"];
for(let index in arr) {
    console.log(index);
}
for(let index of arr) {
    console.log(index);
}