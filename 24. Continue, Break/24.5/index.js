// tìm các số chia hết cho 3 từ 10 đến 50 và đếm
count = 0;
for (let i = 10; i <= 50; i++) {
    if (i % 3 !== 0) {
        console.log(i);
        count++;
    }
}
console.log("Có " + count + " số chia hết cho 3 từ 10 đến 50");


