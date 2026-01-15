// Bài tập js16
// viết ct nhập vào số nguyên a từ bàn phím, 
// nếu a chẵn  thì tính tổng các số chẵn từ 0 đến a
// nếu a lẽ thì in ra không tính 

let a = Number(prompt("Nhập vào số nguyên a: "));
// kiểm tra tính hợp lệ của a, nếu sai thì nhập lại
while(!Number.isInteger(a)) {
    a = Number(prompt("Số không hợp lệ. Vui lòng nhập lại số nguyên a: "));
}
console.log(a);

if (a%2===0){
    let tong = 0;
    for (let i=0; i<=a; i+=2){
        tong += i; // tong = tong + i
    }       
    alert("Tổng các số chẵn từ 0 đến " + a + " là: " + tong);
}
else {
    alert(a + " là số lẽ, không tính tổng");
}