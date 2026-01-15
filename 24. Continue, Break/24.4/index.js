// btjs17
// tính tổng số lẽ từ 1 đến n 
// nhập n = 7 bỏ qua không cộng tổng với số 3, in ra kết quả (gợi ý: 1+5+7=13)
// thử break khi vòng lập chạy đến giá trị n = 3

let n = Number(prompt("Nhập vào số nguyên n: "));
// kiểm tra tính hợp lệ của n, nếu sai thì nhập lại
while(!Number.isInteger(n)) {
    n = Number(prompt("Số không hợp lệ. Vui lòng nhập lại số nguyên n: "));
}
console.log(n);

let sum = 0;
for (let i = 1; i <= n; i+=2) {
    console.log(i);
    if (i === 3) {
        continue; // bỏ qua số 3
    }
   sum += i; // sum = sum + i
}
alert("Tổng các số lẽ từ 1 đến " + n + "loại trừ 3 là: " + sum);