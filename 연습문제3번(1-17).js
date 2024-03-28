// 연습문제 1
for (let i = 0; i <= 100; i+=10) {
    console.log(i,",", (i * (9/5 + 32)));
}

// 연습문제 2
for (let i = 1; i <= 10; i++) {
    console.log(i,",", (i * 2.54));
}

// 연습문제 3
const cca = function (a,b,c) {
    let result = a+b+c;
    return ("세 수의 합은",result,"입니다");
};
console.log(cca(10,20,30));

// 연습문제 4
const  circleAreaArrow = (a,b) => {
    let result = a*b;
    return result;
};
console.log(circleAreaArrow(3,5));

// 연습문제 5
function printHello(x = 12000000, rate = 0.04) {
    let result = x*rate;
    return result;
}
const m = printHello();
console.log(`월 이자는 ${m.toFixed(2)}원입니다.`);

function Min() {
    if (arguments.length === 0) {
        return undefined;
    }

    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

// 연습문제 6

const min = Min(-38, 36, 7, -12, 45);
console.log(`최솟값은 ${min}입니다.`);
console.log(" ");

// 연습문제 7

let j = 10;
function func() {
    let x = 20;
    console.log(j); // 20
}
func();
console.log(j); // 10
console.log(" ");

// 연습문제 8

function func() {
    let z, t;
    if (true) {
        z = 10;
        t = 20;
    }
    console.log(z);
}
func();
console.log(" ");

// 연습문제 9

function func() {
    //내부 블록에서의 x는 외부 블록에서의 x와는 다른 변수
    let a = 20;
    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log(a);
}

let a = 10;
func();
console.log(a);
console.log(" ");

// 연습문제 10
function C(v, height) {
    return 0.5 * v * height;
}

const width = 5;
const height = 8;
const tri = C(width, height);

console.log(`삼각형의 넓이 ${tri}입니다.`);

// 연습문제 11

function c(u) {
    return 2 * 3.14 * u;
}
function c(u) {
    return 3.14 * u * u;
}
const u = 9;
const cir = c(u);
const area = c(u);

console.log(
    `원의 둘레는 ${cir.toFixed(2)}이고, 원의 넓이는 ${area.toFixed(2)}입니다.`
);

// 연습문제 12

let answer = 0;
for (let i =100; i <= 200; i++) {
    answer += i
}
console.log(`100부터 200까지의 합계는 ${answer}입니다.`);


// 연습문제 13
let price = 20000;
let discount;

if (price >= 10000 && price < 50000) {
    discount = 5;
} else if (price >= 50000 && price < 300000) {
    discount = 7.5;
} else if (price >= 300000) {
    discount = 10;
} else {
    discount = 0;
}

let disc_Price = Math.floor(price * (discount / 100));
let Purc_Price = price - disc_Price;

console.log("구매가: " + price.toLocaleString() + "원");
console.log("할인율: " + discount + "%");
console.log("할인 금액: " + disc_Price.toLocaleString() + "원");
console.log("지불금액: " + Purc_Price.toLocaleString() + "원");


// 연습문제 14

function calculateTotalPrice(bookPrice, discountRate, shippingFee) {
    var discountAmount = bookPrice * (discountRate / 100);
    var totalPrice = bookPrice - discountAmount + shippingFee;
    return totalPrice;
}

var bookPrice = 25000;
var discountRate = 10;
var shippingFee = 5000;

var totalPrice = calculateTotalPrice(bookPrice, discountRate, shippingFee);

console.log(`
책 값 : ${bookPrice}원
할인율 : ${discountRate}%
배송료 : ${shippingFee}원
결제금액 : ${totalPrice}원
`);

// 연습문제 15

function f(num) {
    const div = [];
    for (let i = 1; i <= num; i++) if (num % i === 0) div.push(i);
    return div;
}

const num = 16;
const div = f(num);

console.log(`자연수 ${num}의 약수는 ${div.join(", ")}입니다.`);
console.log(" ");

// 연습문제 16

function G(a, b) {
    while (b !== 0) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}

const num11 = 15;
const num22 = 20;
const g = G(num11, num22);

console.log(`${num11}와 ${num22}의 최대 공약수 : ${g}`);
console.log(" ");

// 연습문제 17

function Age(birth) {
    const currentYear = new Date().getFullYear();
    const birthYear = birth.getFullYear();
    const age = currentYear - birthYear;
    return age;
}

const age = Age(new Date("2000-08-10"));
console.log(age);