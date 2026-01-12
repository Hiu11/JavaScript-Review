// while true tạo ra một vòng lặp vô hạn không bao giờ kết thúc trừ khi gặp lệnh break hoặc có lỗi xảy ra
let i = 0;
while(true){
    i++;
    alert(i);
    if(i===10){
        break; // thoát khỏi vòng lặp khi i bằng 10 nếu tới 10 bấm enter thì tắt thông báo
    }
}

