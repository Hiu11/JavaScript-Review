// toán tử spread()

// truyền đối số
function sum(a,b,c){
    return a+b+c;
}
let numbers=[1,2,3];
let result=sum(...numbers);
console.log(result);

// kết hợp mảnh
let arr1=[1,2,3];
let arr2=[1,2,3];
let congArr=[...arr1,...arr2];
console.log(congArr);

