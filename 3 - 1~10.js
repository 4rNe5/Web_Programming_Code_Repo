
// 1
let score = 85;
let e = "A";
if (score >= 90) {
    e = "A"
} else if (score >= 80) {
    e = "B"
} else if (score >= 70) {
    e = "C"
} else if (score >= 60) {
    e = "D"
} else {
    e = "F"
}
console.log(e);

// 2
let result = null;
switch(true) {
    case score >= 90:
        result = "A"
        break
    case score >= 80:
        result = "B"
        break
    case score >= 70:
        result = "C"
        break
    case score >= 60:
        result = "D"
        break
    default:
        result = "F"
        break
}
console.log(result)

// 3
let nowMonth = 3

let m = (nowMonth in [3, 4, 5])? "봄":
    (nowMonth in [6, 7, 8])? "여름":
        (nowMonth in [9, 10, 11])? "가을":
            "겨울";
console.log(`${nowMonth}월은 ${m} 입니다.`);

// 4
for (let i=100; i<301;i+=3) {
    process.stdout.write(`${i.toString()} `);
}

// 5
for (let i=200; i<501;i+=5) {
    process.stdout.write(`${i.toString()} `);
}

// 6
for (let i=0; i<5;i++) {
    for (let i=100; i<301;i+=3) {
        process.stdout.write(`${i.toString()} `);
    }
}

// 7
let fac = 5

for (let i=fac-1; i > 0; i--) {
    console.log(i)
    if (i != 0) {
        fac *= i
    }
}
console.log(fac)

// 8
for (let i=1; i < 101; i+= 2) {
    console.log(`${i}마일 ${(i*1.609344).toFixed(2)} km`)
}

// 9
function isPrime(x) {
    for (let i=2; i<=Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false
        }
    }
    return true
}


console.log((isPrime(8))? "소수" :"소수아님")


// 10
for (let i=1; i<=100;i++) {
    if (isPrime(i)) {
        process.stdout.write(`${i.toString()} `);
    }
}