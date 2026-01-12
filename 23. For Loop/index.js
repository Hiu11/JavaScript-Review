// biểu thức for loop
// for( khởi tạo biến; điều kiện; bước nhảy){
//      // khối lệnh được thực hiện trong mỗi vòng lặp
// }


// ví dụ 1
for(let i = 1; i <= 5; i++){
    console.log(i);
} // 0 1 2 3 4 5

// ví dụ 2 xuất các số chẵn từ 2 đến 10
for(let i = 2; i <= 10; i += 2){
    console.log(i);
} // 2 4 6 8 10

// ví dụ 3 tính tổng các số chẵn từ 0 đến 10
let tong = 0;
for(let i = 0; i <= 10; i += 2){
    tong += i; // tong = tong + i
}
console.log("Tổng các số chẵn từ 0 đến 10 là: " + tong); // 30
 