let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);
console.log("Giá trị của b:", b);

// 8 giá trị falsy trong JavaScript khi chuyển đổi sang bool sẽ là false
// false, 0, -0, 0n, "", null, undefined, NaN
console.log(typeof 0n);
let c = Boolean("");
console.log(c);
console.log(typeof c);

// ví dụ kiểm tra 1 biến giá trị hay undefined
let salary;
console.log(salary); // undefined
if(salary){
    console.log("Biến salary đã được gán giá trị");
}
else{
    console.log("Biến salary chưa được gán giá trị");
}