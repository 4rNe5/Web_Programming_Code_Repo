// 1-1
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        process.stdout.write('짝 ');
    } else {
        process.stdout.write(i.toString() + ' ');
    }
}

// 1-2
const number = 18234;
let sum = 0;
let numString = number.toString();
for (let i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
}
console.log(sum);

// 1-3
const number = 153;
let numString = number.toString();
let sum = 0;
for (let i = 0; i < numString.length; i++) {
    sum += Math.pow(parseInt(numString[i]), 3);
}
if (sum === number) {
    console.log(`${number}은(는) 암스트롱 수 입니다.`);
} else {
    console.log(`${number}은(는) 암스트롱 수가 아닙니다.`);
}

// 1-4
for (let i = 100; i <= 999; i++) {
    let numString = i.toString();
    let sum = 0;
    for (let j = 0; j < numString.length; j++) {
        sum += Math.pow(parseInt(numString[j]), 3);
    }
    if (sum === i) {
        process.stdout.write(i + ' ');
    }
}

// 1-5
const number1 = 35;
const number2 = 2245;
const lastDigit1 = number1 % 10;
const lastDigit2 = number2 % 10;
if (lastDigit1 === lastDigit2) {
    console.log('두 숫자의 끝 자리 값이 서로 같다.');
} else {
    console.log('두 숫자의 끝 자리 값이 서로 다르다.');
}

// 1-6
let count = 0;
for (let i = 0; i <= 1000; i++) {
    let numString = i.toString();
    for (let j = 0; j < numString.length; j++) {
        if (numString[j] === '1') {
            count++;
        }
    }
}
console.log(`0부터 1000까지 1의 개수는 ${count}개입니다.`);