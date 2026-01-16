// khai báo mảng sử dụng dấu []
// khai báo mảng rỗng 
let arr1 = [];
console.log(arr1);

// tạo mảng các ptu bên trong
let arr2 = [1, 2, 3, 4, "nam", true, [2, 3, 4, 5]];
console.log(arr2);

//cách 2 sử dụng array và constructor:
let arr3 = new Array();
console.log(arr3);
// tạo mảng các ptu bên trong
let arr4 = new Array(1, 2, 3, 4, "nam", true, [2, 3, 4, 5]);
console.log(arr4);
// truy xuấtpt index
console.log(arr4[5]);
console.log(arr4.length);
//thay đổi gtri
arr4[2] = 10
console.log(arr4);

// duyệt mảng
// cách 1 dùng forr
let arr7 = [1, 2, 3, 4, 5];
console.log(arr7);
for (let i = 0; i <= arr7.length; i++) {
    console.log(arr7[i]);
    arr7[i] = arr7[i] * 2;
}
console.log(arr7);



