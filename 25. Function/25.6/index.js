// giải pt bậc 2
// ax^2 + bx + c = 0
// nhập a, b, c từ bàn phím
function ptb2_1(a, b, c) { // đây là dạng function declaration
    // tính delta
    let delta = b**b - 4*a*c;
    if (delta < 0) {
        return "Phương trình vô nghiệm";
    }
    else if (delta === 0) {
        let x = -b / (2*a);
        return `Phương trình có nghiệm kép x1 = x2 = ${x}`;
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        return `Phương trình có hai nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`;
    }
    return "Phương trình vô nghiệm";
}
ptb2_1(1, -3, 2); // gọi hàm



// cách 2: function expression
let ptb2_2 = function(a, b, c) {
    // tính delta
    let delta = b**b - 4*a*c;   
    if (delta < 0) {
        return "Phương trình vô nghiệm";
    }                   
    else if (delta === 0) {
        let x = -b / (2*a);
        return `Phương trình có nghiệm kép x1 = x2 = ${x}`;
    }
    else {  
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        return `Phương trình có hai nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`;
    }
    return "Phương trình vô nghiệm";
}
// nhập a, b, c từ bàn phím
a = Number(prompt("Nhập hệ số a: "));
b = Number(prompt("Nhập hệ số b: "));
c = Number(prompt("Nhập hệ số c: "));
ketQua = ptb2_2(a, b, c);
console.log(ketQua);

// cách 3: arrow function
let ptb2_3 = (a, b, c) => {
    // tính delta
    let delta = b**b - 4*a*c;
    if (delta < 0) {
        return "Phương trình vô nghiệm";
    }
    else if (delta === 0) {
        let x = -b / (2*a);
        return `Phương trình có nghiệm kép x1 = x2 = ${x}`;
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        return `Phương trình có hai nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`;
    }
    return "Phương trình vô nghiệm";
}
// nhập a, b, c từ bàn phím
a = Number(prompt("Nhập hệ số a: "));
b = Number(prompt("Nhập hệ số b: "));
c = Number(prompt("Nhập hệ số c: "));
ketQua = ptb2_3(a, b, c);
console.log(ketQua);