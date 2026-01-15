// arrow function (hàm mũi tên)
// Arrow function là một cú pháp ngắn gọn để khai báo hàm trong JavaScript. 
// Chúng thường được sử dụng để viết các hàm ngắn gọn và dễ đọc hơn, đặc biệt là trong các trường hợp như hàm callback.

// Cú pháp cơ bản của arrow function như sau:
// (parameters) => {
//     // thân hàm
// }
// Nếu hàm chỉ có một tham số, bạn có thể bỏ dấu ngoặc đơn:
// parameter => {
//     // thân hàm
// }
// Nếu thân hàm chỉ có một biểu thức, bạn có thể bỏ dấu ngoặc nhọn và từ khóa return. Biểu thức đó sẽ được trả về tự động:
// (parameters) => expression
// Ví dụ về arrow function:
// tính tích hai số a b
// function expression
let multiply = function (a,b){
    return a * b;
}
// gọi hàm
console.log(multiply(4, 5));

// arrow function
let multiplyArrow = (a, b) => a * b; // không cần từ khóa return và dấu ngoặc nhọn
console.log(multiplyArrow(4, 5));

// với trường hợp phức tạp hơn cần thêm khối {}
let multiplyAnsAddArrow = (a, b) => {
    let product = a * b;
    let sum = a + b;
    return product + sum;
};
// gọi hàm
console.log(multiplyAnsAddArrow(4, 5));

let multiplyAndAdd = function(a,b) {
    let product = a * b;
    let sum = a + b;
    return product + sum;
};
console.log(multiplyAnsAdd(4, 5));



