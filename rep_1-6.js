// rep-1-1
const text = '복잡한 세상 편하게 살자';
const words = text.split(' ');
const abbreviatedText = words.map(word => word.charAt(0)).join('');
console.log(abbreviatedText);

// rep-1-2
const str = 'pineapple is yummy';
const searchStr = 'apple';
const index = str.indexOf(searchStr);
console.log(index);

// rep-1-3
const str2 = '안녕하세요. 저는 대소고 소개과 홍길동입니다.';
const words2 = str2.split(' ');
const wordCount = words2.length;
console.log(wordCount);

// rep-1-4
const str3 = 'hqllo my namq is hyqwon';
const correctedStr = str3.replace(/q/g, 'e');
console.log(correctedStr);

// rep-1-5
const str4 = 'aaabbbbcdddd';
let compressedStr = '';
let currentChar = str4[0];
let charCount = 1;

for (let i = 1; i < str4.length; i++) {
    if (str4[i] === currentChar) {
        charCount++;
    } else {
        compressedStr += currentChar + charCount;
        currentChar = str4[i];
        charCount = 1;
    }
}

compressedStr += currentChar + charCount;

console.log(compressedStr);

// rep-1-6
function areConsecutiveIntegers(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return 'NO';
        }
    }
    return 'YES';
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 4, 2, 6, 3];

console.log(areConsecutiveIntegers(arr1));
console.log(areConsecutiveIntegers(arr2));