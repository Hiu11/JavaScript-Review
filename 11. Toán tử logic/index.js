// Bài 5 chu vi diện tích hình tròn
let r = Number(prompt("Nhập bán kính hình tròn: "));
const PI = Math.PI;
let chuVi = 2 * PI * r;
let dienTich = PI * r * r;
console.log("Chu vi hình tròn là: " + chuVi);
console.log("Diện tích hình tròn là: " + dienTich);

// Bài 6 chu vi diện tích hình chữ nhật
let a = Number(prompt("Nhập chiều dài hình chữ nhật: "));
let b = Number(prompt("Nhập chiều rộng hình chữ nhật: "));
let chuViHCN = 2 * (a + b);
let dienTichHCN = a * b;
console.log("Chu vi hình chữ nhật là: " + chuViHCN);
console.log("Diện tích hình chữ nhật là: " + dienTichHCN);

// Bài 7 Viết chương trình tính điểm trung bình ba môn toán văn anh và làm tròn đến hai chữ số thập phân
let diemToan = Number(prompt("Nhập điểm môn Toán: "));
let diemVan = Number(prompt("Nhập điểm môn Văn: "));
let diemAnh = Number(prompt("Nhập điểm môn Anh: "));
let diemTrungBinh = ((diemToan + diemVan + diemAnh) / 3).toFixed(2);
console.log("Điểm trung bình ba môn là: " + diemTrungBinh);