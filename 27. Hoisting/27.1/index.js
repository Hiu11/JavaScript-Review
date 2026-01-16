// var và let hoisting trong js
// console.log("Giá trị của biến c = " + c);
// khởi tạo c
// var c = 9 // đẩy khai báo k nhưng k đẩy gán giá trị lên đầu
// cách js hiểu như sau:
// var c;
// console.log("Giá trị của biến c = " + c); // undefined
// c = 9

// tóm lại hoisting là hiện tượng khai báo biến (var) và hàm được "nâng lên" đầu phạm vi (scope) của chúng trước khi mã được thực thi.

// khác với var, let không bị hoisting
// console.log("Giá trị của biến d = " + d); // lỗi
// console.log("Giá trị của biến d = " + d);
// let d = 10;

// cách js hiểu như sau:
// console.log("Giá trị của biến d = " + d); // lỗi
// let d = 10;

// sự khác nhau giữa khởi tạo và khai báo
// nếu thay var bằng let và const: nhưng sẽ nằm trong vùng check tạm thời và báo lỗi do k dc khởi tạo
 

// 2. Phạm vi sử dụng (Scope)
// let: có phạm vi function scope
// var: có phạm vi là block scope



 // var: có phạm vi là block scope
//  function exampleVar(){
//     if(true){
//         var y = 20; // JS hiểu đẩy biến trc if nên console dc 
//         // nếu thay bằng let thì ở bên ngoài k còn truy cập dc biến y như dùng var
//         console.log(`${y} trong block scope`);
//     }
//     console.log(`${y} trong vi block scope`);
//  }
//  exampleVar();


// 3. Re-declaration
// var có thể khai báo lại một biến đã sử dụng mà không gây ra lỗi
// let không thể khai báo lại một biến sử dụng let trong cùng phạm vi
//ví dụ
// var diemToan = 1;
// var diemToan = 2;
// let diemVan = 3;
// let diemVan = 4; // lỗi k khai báo dc



