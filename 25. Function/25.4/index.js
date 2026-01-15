// function calling another function là một khái niệm mà một hàm có thể gọi một hoặc nhiều hàm khác để thực hiện các tác vụ cụ thể. Điều này giúp chia nhỏ ctrinh thành các phần nhỏ hơn, dễ quản lý và tái sử dụng mã nguồn.

// hàm thưc hiện phép cộng hai số
function add(a, b) {
    return a + b;
}
console.log(add(3, 5)); // 8

// hàm thực hiện phép nhân hai số   
function multiply(x, y) {
    return x * y;
}
console.log(multiply(4, 6)); // 24

// hàm gọi hai hàm trên cộng nhân
function addAndMultiply(num1, mum2, num3) {
    // gọi hàm add để tính tổng num1 và num2
    let sum = add(num1, mum2);
    // gọi hàm multiply để tính tích của sum và num3
    let product = multiply(sum, num3);
    return product;
}
console.log(addAndMultiply(2, 3, 4)); // (2 + 3) * 4 = 20
