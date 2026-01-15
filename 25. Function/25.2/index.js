// function declaration
function tenFunction(parameters) {
    // thân hàm
    //return something;
}
// khai bao hàm
function tong(a=1,b=0) {
    return a + b;
}
// goi hàm
console.log(tong(3,4)); // 7


// function expression
let ten_bien = function(parameters) {
    // thân hàm
    //return something;
};
// khai báo
let tich = function(a=1,b=1) {
    return a * b;   
}
// gọi hàm
console.log(tich(3,4)); // 12