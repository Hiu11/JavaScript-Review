// tính n! bằng function
function tinhGiaiThuaFor(n) {
    let gt = 1;
    for (let i = 1; i <= n; i++) {
        gt *= i; // gt = gt * i
    }   
    return gt;
}
// bước nhập liệu 
let n = Number(prompt("Nhập vào số nguyên không âm: "));
// kiểm tra tính hợp lệ của n, nếu sai thì nhập lại
while(!Number.isInteger(n) || n < 0) {
    n = Number(prompt("Số không hợp lệ. Vui lòng nhập lại số nguyên không âm: "));
}
console.log(n);

let ketQuaFor = tinhGiaiThuaFor(n);
console.log(`${n}! = ${ketQuaFor}`);