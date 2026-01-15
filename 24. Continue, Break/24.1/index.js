let n = 0;
while (n < 100) {
    n++; // tăng giá trị của n lên 1
    if (n === 4) {
        break; // thoát khỏi vòng lặp khi n bằng 4
    }
}
console.log(n);

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // bỏ qua các số lẽ
    } else {
        console.log(i); // in ra các số chẵn
    }
} 