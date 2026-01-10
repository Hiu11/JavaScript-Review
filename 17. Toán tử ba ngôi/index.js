// 17.2 Giải bài tập JS 13 - Toán tử 3 ngôi
/*
Bài tập 13: Viết chương trình nhập vào điểm trung bình,
và xuất kết quả xếp loại của học sinh theo tiêu chuẩn sau:
(dùng toán tử 3 ngôi)

Giỏi: Nếu Điểm >= 8
Khá: Nếu 8 > Điểm >= 6.5
Trung bình: Nếu 6.5 > Điểm >= 5
Yếu: Nếu Điểm < 5
*/
let diemTB = Number(prompt("Nhập điểm trung bình của học sinh: "));
let xepLoai = (diemTB >= 8) ? "Giỏi" : (diemTB >= 6.5) ? "Khá" : (diemTB >= 5) ? "Trung bình" : "Yếu";
console.log("Xếp loại học sinh là: " + xepLoai);

