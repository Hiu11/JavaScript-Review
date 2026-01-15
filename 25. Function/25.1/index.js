// let a = Number(prompt("Nhập số thứ nhất: "));
// let b = Number(prompt("Nhập số thứ hai: "));
// function tinhTong(a, b) {
//     return a + b;
// }
// console.log (tinhTong(a, b)); 


function xinChao(){
    console.log("Xin chào các bạn!");       
}
xinChao();
xinChao();

// let inputName = prompt("Nhập tên của bạn: ");
function xinChao2(name){
    console.log(`Xin chào ${name}!`);       
}
// xinChao2(inputName);

// ví dụ 2 tính tổng hai số a và b
function tinhTong(a, b) {
    // let ketQua = a + b;
    return a + b;
}
console.log(tinhTong(3, 5));

// gán biến cho hàm (lưu giá trị trả về vào biến)
let diemToan = 8;
let diemLy = 6;
let tongDiem = tinhTong(diemToan, diemLy);
console.log(`Tổng điểm hai môn Toán và Lý là: ${tongDiem}`);
console.log(`DTB hai môn là: ${tongDiem/2}`);

// ví dụ tt
// thân hàm k có return thì hàm sẽ trả về giá trị undefined
// 5. truyền giá trị mặc định parameters
console.log(tinhTong(10)); // b sẽ nhận giá trị undefined
function tinhTong2(a = 0, b = 0) { // gán giá trị mặc đinhj cho a và b
    return a + b;
}
console.log(tinhTong(10)); // b sẽ nhận giá trị 0 do ta đã gán giá trị mặc định cho b là 0