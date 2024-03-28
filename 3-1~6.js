// 3-1
let a = 10;
let b = "20";

console.log(a+b); // 1020
console.log(a*b); // 200
console.log(a/b); // 0.5
console.log(a/"a"); // NaN

// 3-2
let x = 125;
let y = 0xff;
console.log(x.toString(16));// x -> 16진수로 변환 값 출력
console.log(x.toString(2));// x -> 2진수로 변환 값 출력
console.log(y.toString(10));// y -> 10진수로 변환 값 출력
console.log(y.toString(2));// y -> 2진수로 변환 값 출력

// 3-3
let num1 = 1111;
let num2 = 2222;
let phone = `010-${num1.toString()}-${num2.toString()}`;
console.log(phone);

// 3-4
let num3 = 36.237599635;
console.log(num3.toFixed(2));// toFixed()로 소수점 둘째 자리까지 출력
console.log(num3.toPrecision(5));// toPrecision()으로 전체 다섯 자리까지 출력

// 3-5
console.log(Number("25")); // 25
console.log(Number("25.55")); // 25.55
console.log(Number("abc")); // NaN
console.log(parseInt("127.63")); // 127
console.log(parseInt(" 127.22")); // 127
console.log(parseInt("25 55")); // 25
console.log(parseFloat("356")); // 356
console.log(parseFloat("356.777")); // 356.777
console.log(parseFloat(" 356.22")); // 356.22
console.log(parseFloat("abc")); // NaN

// 3-6
console.log("10진수 16진수 2진수")
for (let i = 100; i <= 150; i++) {
    console.log(`${i} ${i.toString(16)} ${i.toString(2)}`);
}