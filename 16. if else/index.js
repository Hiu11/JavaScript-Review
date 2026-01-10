// Bài 7 tìm x, y biết tổng và hiệu của chúng 
// case test: tong=14, hieu=4 =>x=9,y=5
// case 2: tong=8, hieu=5 =>x=6.5,y=1.5
// 2x=(tong+hieu)
// => x=(tong+hieu)/2
// y=x-hieu
let tong = Number(prompt("Nhập tổng của hai số x và y: "));
let hieu = Number(prompt("Nhập hiệu của hai số x và y: "));
let x = (tong + hieu) / 2;
let y = x - hieu;
console.log("Giá trị của x là: " + x);
console.log("Giá trị của y là: " + y);

