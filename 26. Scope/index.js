// có ba loại scope
// 1. global scope (phạm vi toàn cục)
// 2. function scope (phạm vi hàm)
// 3. block scope (phạm vi khối lệnh)

// 1. global scope
let x = 1; // biến toàn cục
// có thể truy xuất biến toàn cục ở bất kỳ đâu trong file
console.log("Giá trị của x trong global scope: " + x);

function viDu_1(){
    // có thể truy xuất biến toàn cục trong hàm
    console.log("Giá trị của x trong function viDu_1: " + x);
    // thử phạm vi block scope
    if (x%2===0){
        console.log(`${x} là số chẵn`);
    } else {
        console.log(`${x} là số lẻ`);
    }
}
// gọi hàm
    viDu_1();

// 2. function scope
function viDu_2(){
    //function scope
    let y = 2; // biến cục bộ
    // chỉ có thể truy xuất biến cục bộ trong hàm
    console.log("Giá trị của y trong function viDu_2: " + y);
    // thử phạm vi block scope
    if (y%2===0){
        console.log(`${y} là số chẵn`);
    } else {
        console.log(`${y} là số lẻ`);
    }
}
// gọi hàm
viDu_2();
// không thể truy xuất biến cục bộ bên ngoài hàm
// console.log("Giá trị của y bên ngoài hàm viDu_2: " + y); // lỗi

// 3. block scope
function viDu_3(){
    // block scope
    if (true){
        let z = 3; // biến z chỉ có phạm vi trong khối lệnh if
        console.log("Giá trị của z trong block scope: " + z);
    }
    // không thể truy xuất biến z bên ngoài khối lệnh if
    // console.log("Giá trị của z bên ngoài block scope: " + z); // lỗi
}
// gọi hàm
viDu_3();

// kết luận:
// - biến khai báo bên ngoài hàm có phạm vi toàn cục (global scope)
// - biến khai báo bên trong hàm có phạm vi hàm (function scope)
// - biến khai báo bên trong khối lệnh (như if, for, while) có phạm vi khối lệnh (block scope) nếu dùng let hoặc const
// - biến khai báo bằng var không có block scope, chỉ có global scope và function scope
