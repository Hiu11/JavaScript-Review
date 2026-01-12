// while loop 
let i = 1;
while(i<=5){
    console.log(i); 
    i++; //i = i + 1
}

let n = prompt("Nhập số nguyên từ 1 đến 99:");
console.log("Số bạn vừa nhập là: " + n);
while(n < 1 || n > 99 || isNaN(n) || n%1 !== 0){
    n = prompt("Số bạn nhập không hợp lệ. Vui lòng nhập số nguyên từ 1 đến 99:");
}
alert("Cảm ơn bạn! Số bạn vừa nhập là: " + n);