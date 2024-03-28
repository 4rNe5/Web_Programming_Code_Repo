let str13 = " javascript string ";
let str14 = str13.trim();
console.log(str14);
console.log(str13.length);
console.log(str14.length);

let str15 = str13.trimStart();
let str16 = ""
for(let x of str15) {
    if(x==" ") {
        str16 += "#";
    } else {
        str16 += x;
    }
}
console.log(str13.length);
console.log(str15.length);
console.log(str16);

let str17 = str13.trimEnd();
let str18 = ""
for(let x of str18) {
    if(x==" ") {
        str18 += "#";
    } else {
        str18 += x;
    }
}

console.log(str13.length);
console.log(str17.length);
console.log(str18);