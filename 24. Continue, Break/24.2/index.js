// let a = 8;
// if (a % 1 === 0) {
//     console.log(`${a} là số nguyên`);
// } else {
//     console.log(`${a} không phải số nguyên`);
// }
// console.log(Number.isInteger(abc)); // kiểm tra biến abc có phải số nguyên hay không

// bài tập js15: viết chương trình nhập vào số nguyên n, in ra kết quả n!
// 1. dùng vòng lập for
// 2. dùng vòng lặp while

let n = Number(prompt("Nhập vào số nguyên không âm: "));
// kiểm tra tính hợp lệ của n, nếu sai thì nhập lại
while(!Number.isInteger(n) || n < 0) {
    n = Number(prompt("Số không hợp lệ. Vui lòng nhập lại số nguyên không âm: "));
}
console.log(n);

// 1. dùng vòng lập for
let gt = 1;
for (let i = 1; i <= n; i++) {
    console.log(i);
    gt *= i; // gt = gt * i
}
console.log(n + "! = " + gt);
