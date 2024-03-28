// 2-1
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
const day = currentDate.getDate();

console.log(`${year}/${month}/${day}`);

// 2-2
const currentTime = new Date();
const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

console.log(`${hours}:${minutes}:${seconds}`);