// 1. cách xuất chuỗi
console.log("");
console.log('');
console.log(``);

// 2. khởi tạo chuỗi
let s1 = `ádfghjkxcvbnm`;
console.log(s1);
let s2 = "fdghjkl\ndfghjkdfghj"
console.log(s2);

// 3. quy tắc chuối index trong string
// index bắt đầu từ 0
let ten = "Linh";
console.log(ten[1]);

// 4. length kiểm tra chiều dài chuỗi
let s3 ="Hôm nay tôi đi hc";
let s3Length = s3.length;
console.log(s3);
console.log(s3.length);
console.log(s3Length);

// 5. VÍ DỤ
let message = prompt("Mời bạn nhập");
if (message.length<=140){
    alert(`bạn đã nhập ${message.length} ký tự`);
}
else{
    alert(`bạn đã nhập quá ${message.length - 140} ký tự`)
}
