// 2-1
const book = {
    title: "꿈과 사랑",
    author: "정영진"
};
console.log(`책 제목: ${book.title}`);
console.log(`저자: ${book.author}`);

// 2-2
const book1 = {
    title: "꿈과 사랑",
    author: "정영진",
    price: 15000,

    showPrice() {
        console.log(`${this.title}의 가격은 ${this.price}원입니다.`);
    }
};
book1.showPrice();

// 2-3
function Book3(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;

    this.showInfo = function() {
        console.log(`${this.title} ${this.author} ${this.price}`);
    };
}
const book3 = new Book3("자바스크립트 기초", "김수정", 25000);

book3.showInfo();

// 2-4
function Book4(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;

    this.showInfo = function() {
        console.log(`${this.title} ${this.author} ${this.price} ${this.year}`);
    };
}

Book4.prototype.year = "2023년 8월 1일";

const book4 = new Book4("자바스크립트 기초", "김수정", 25000);

book4.showInfo();