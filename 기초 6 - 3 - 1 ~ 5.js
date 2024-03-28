const set1 = new Set("cat hat hut".split(''));
for (const item of set1) {
    process.stdout.write(item + '\\n');
}

console.log()

const set2 = new Set
for (let i = 0; i < 9; i++) {
    set2.add(i)
}
for (var j of set2) {
    console.log(j)
}

const numbers = new Set([3,5,8,-2,0,-2,3,7])
if (numbers.has(-2)){
    console.log("-2는 존재함")
} else {
    console.log("존재하지 않음")
}

const set3 = new Set("i am a student")
console.log(set3.size)

const set4 = new Set("javascript")
set4.delete('a');
console.log(set4)

let numArr = [3,7,12,3,12,3];
let setNumArr = new Set(numArr)
console.log(setNumArr)