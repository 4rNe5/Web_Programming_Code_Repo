// 1
console.log(30%4); // 실행결과 : 2
console.log(5%10); // 실행결과 : 5

// 2
let a = 3, b = 4, c;
a %= 10;
b = a**b;
c = a-b;
c++;
console.log(c); // 실행결과 : -77

// 3
let x = 10, y = '10', z = 30;
console.log(x==y); // 실행결과 : true
console.log(x===y); // 실행결과 : false
console.log(x!=y); // 실행결과 : false
console.log(x!==y); // 실행결과 : true
console.log(z<=20); // 실행결과 : false
console.log(z<=30); // 실행결과 : true

// 4
let d = -10;
d += 30;
console.log(d); // 20

// 5
let e = 3;
e *= -2;
console.log(e); // -6

// 6
let f = 3;
f %= 5;
console.log(f); // 3

// 7
let s = "토끼";
s += "거북이";
console.log(s); // 토끼거북이

// 8
let i = 3, j = 4,k = 2;
i += 7;
i--;
j-=2;
j++;
k %= 5;
k = i + j;
console.log(i + j + k); // 24

// 9
const r = 8;
const pi = 3.14;
console.log(`반지름이 ${r}인 원의 넓이는 ${r ** 2 * pi}입니다.`);

// 10
const send = 10000;
const price = 1500;
const num = 5;
console.log(`구매한 금액은 총액은 ${price * num}원이고 거스름돈은 ${send - price * num}원입니다.`);

// 11
const temp = 30;
console.log(`섭씨 ${temp}°C는 화씨 ${(temp * 9) / 5 + 32}°F입니다.`);

// 12
const m = 10;
const h = 20;
console.log(`밑변이 ${m}이고 높이가 ${h}인 삼각형의 넓이는 ${(10 * 20) / 2} 입니다.`);

// 13
const km = 42.195;
console.log(`${km}km는 ${km * 0.621371}mile입니다.`);

// 14
const kg = 60;
const pound = 60 * 2.2;
console.log(`${kg}는 ${pound}lb입니다.`);

// 15
const grandWidth = 99;
const buildWidth = grandWidth * 0.3;
console.log(`${grandWidth}㎡는 ${buildWidth}평입니다.`);

// 16
const upper = 10;
const under = 14;
const height = 4;
const width = ((upper + under) / 2) * height;
console.log(`윗변이 ${upper}, 밑변이 ${under}, 높이가 ${height}인 사다리꼴의 넓이는 ${width}입니다.`);

// 17
const money = 12000000;
const percent = 0.04;
const money0 = (money * percent) / 12;
console.log(`월 이자는 ${money0}원입니다.`);
