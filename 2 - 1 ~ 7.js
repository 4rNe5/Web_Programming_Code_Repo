// 문제 2-1 ~ 2-7

const tel = ["010", "1234", "5678"];
console.log(tel.join("-")); // 010-1234-5678

const scoresTest = [85, 98, 99];
scoresTest.push(100);
console.log(scoresTest); //[ 85, 98, 99, 100 ]
console.log(scoresTest.pop()); //100
console.log(scoresTest.shift()); //85

const colors = ["빨강", "노랑", "파랑", "주황"];
colors.splice(0, 2, "검정");
console.log(colors); //["검정", "파랑", "주황"]
colors.splice(2, 0, "하얀");
console.log(colors); //["검정", "파랑", "하얀", "주황"]
colors.splice(1, 2);
console.log(colors); //["검정", "주황"]

const music = ["가요", "팝송", "클래식", "재즈", "OST"];
console.log(music.indexOf("클래식")); //2
console.log(music.includes("팝송")); //true
console.log(music.includes("샹송")); // false
console.log(music.slice(1, 4)); //[ '팝송', '클래식', '재즈' ]
console.log(music.slice(-1)); // [ 'OST' ]

const numbers1 = [7, -24, -8, 10, 17, -58];
let temp = numbers1.find(number => number<0);
console.log(temp);
numbers1.forEach((func));
function func(item) {
    console.log(item);
}
let arr = numbers1.map(num => num * 10);
console.log(arr);

//-24
// 7
// -24
// -8
// 10
// 17
// -58
// [ 70, -240, -80, 100, 170, -580 ]

const colors1 = ["빨강", "노랑", "주황", "빨강", "파랑", "빨강"];
colors.forEach(findColor);

function findColor(color, index) {
    console.log(colors1.indexOf(color), index);
}


const numbers2 = [10, 20, 30, 40, 50];
const k = numbers2.map(convert);

function convert(number) {
    const k = "0x" + number.toString(16).toUpperCase();
    return k;
}

console.log(k);