// 27.2 Hoisting in function
// 2. Hoisting:
// Function Declaration: có hoisting. bạn có thể gọi hàm trc khi địnhk nghĩa
hoistedFunction()
function hoistedFunction(){
     console.log("Hello");
}
//Engine của trình duyệt đọc
function hoistedFunction(){
     console.log("Hello");
}
hoistedFunction();

// Function expression: Không có hoisting. phải gọi hàm sau khi dc khởi tạo
   
// arrow function: ko có hoisting. phải gọi sau khi đã 