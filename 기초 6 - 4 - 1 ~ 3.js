// 4-1
const person = new Map([
    ["name", "홍길동"],
    ["age", 25],
    ["tel", "010-1234-5678"],
]);

for (const [key, value] of person) {
    if (typeof value === "string") {
        console.log(`${key}: ${value}`);
    }
}

// 4-2
const book = new Map([
    ["title", "나의 꿈"],
    ["author", "홍길동"],
    ["price", 12000],
]);
book.forEach((value, key) => {
    if (typeof value === "string") {
        console.log(`${key}: ${value}`);
    }
});

// 4-3
const book1 = new Map([["title", "밤의 꿈"], ["author", "김동인"]]);
console.log(`제목: ${book1.get("title")}`);
book1.delete("author");
console.log(`author 키 존재 여부: ${!book1.has("author")}`);
console.log(`Map 객체 크기: ${book1.size}`);
for (const [key, value] of book1) {
    console.log(`${key}: ${value}`);
}