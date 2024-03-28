// 1-1
const str = 'We are the world!';
const firstChar = str[0];
const seventhChar = str[6];
console.log(firstChar, seventhChar);

// 1-2

let output = '';
for (let i = 0; i < str.length; i++) {
    output += str[i] + '';
}
console.log(output);

// 1-3
let output_2 = '';
for (const char of str) {
    output_2 += char + '';
}
console.log(output_2);

// 1-4
let str4 = "Nice to meet you!";
console.log(str4.slice(0, 6)); // Nice t
console.log(str4.slice(9, 12)); // eet

// 1-5
let str5 = "Nice to meet you!";
console.log(str5.substr(0, 4)); // Nice
console.log(str5.substr(8)); // meet you!
console.log(str5.substr(5, 2)); // to

// 1-6
let str6 = "Have a nice day!";
console.log(str6.replace("nice", "good")); // Have a good day!

// 1-7
let str7 = "사과";
let str8 = "오렌지";
console.log(str7 + str8); // 사과오렌지
console.log(`${str7}/${str8}`); // 사과/오렌지

// 1-8
let numbers = "10/20/30/40/50";
let num = numbers.split("/");
console.log(num[1]); // 20
console.log(num[3]); // 40
for(n of num) {
    console.log(n); // 10
                    // 20
                    // 30
                    // 40
                    // 50
}

// 1-9
let scores = "93 87 77 93 86";
let scoreArray = scores.split(' ').map(Number);
let sum = scoreArray.reduce((acc, curr) => acc + curr, 0);
let average = sum / scoreArray.length;
console.log(`합계: ${sum}, 평균: ${average}`);

// 1-10
let text = " How are you? ";
let trimmedText = text.trim();
let replacedText = trimmedText.replace(/ /g, '#');
console.log(`##${replacedText}##`);
console.log(` ${replacedText}`);
console.log(`${replacedText}##`);
console.log(`##${replacedText} `);

// 1-11
let month = "7";
let month2 = month.padStart(2, "0");
let month3 = month2.padEnd(3, "월");
console.log(month2 + ", " + month3); // 07, 07월

// 1-12
let str12 = "토끼 거북이 토끼 거북이 토끼 거북이";
console.log(str12.indexOf("토끼", 3)); // 7
console.log(str12.match(/거/g)); // [ '거', '거', '거' ]

// 1-13

let str13 = "javascript php python";
if (str13.includes("a")) {
    console.log("yes");
} else {
    console.log("no");
}
if (str13.includes("k")) {
    console.log("yes");
} else {
    console.log("no");
}
// yes
// no

// 1-14
let name = "홍길동";
let tel = "010-1234-5678";
let registDay = "20200713";

let formattedTel = tel.replace(/-/g, '');
let formattedRegistDay = `${registDay.substr(0, 4)}년${registDay.substr(4, 2)}월${registDay.substr(6, 2)}일`;

console.log(`이름: ${name}`);
console.log(`전화번호: ${formattedTel}`);
console.log(`생일: ${formattedRegistDay}`);