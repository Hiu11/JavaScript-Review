// kiểm tra chẵn lẻ
let number = Number(prompt("Nhập vào một số bất kỳ:"));
switch(number % 2){
    case 0:
        console.log(`${number} là số chẵn`);
        break;
    case 1:
        console.log(`${number} là số lẻ`);
        break;
    default:
        console.log("Giá trị không hợp lệ");
}


// kiểm tra tháng có 31 ngày 
let month = parseInt(prompt("Nhập vào tháng (1-12):"));
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Tháng ${month} có 31 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Tháng ${month} không có 31 ngày`); 
        break;
    case 2:
        console.log(`Tháng ${month} không có 31 ngày`);
        break;
    default:
        console.log("Giá trị không hợp lệ");
}

// Cách xuất chuỗi xuống dòng 
console.log("Công cha như núi Thái Sơn,\nNghĩa mẹ như nước trong nguồn chảy ra.");

// Viết chương trình tìm kiếm cho người dùng
let choice = Number(prompt(`
    Chọn cách tìm kiếm sản phẩm:
    1. Tìm theo tên
    2. Tìm theo tác giả
    3. Tìm theo nhà sản xuất
    4. Tìm theo tiêu đề
`));
switch(choice){ 
    case 1:
        alert("Đây là sản phẩm bạn tìm theo tên");
        break;
    case 2:
        alert("Đây là sản phẩm bạn tìm theo tác giả");
        break;
    case 3:
        alert("Đây là sản phẩm bạn tìm theo nhà sản xuất");
        break;
    case 4: 
        alert("Đây là sản phẩm bạn tìm theo tiêu đề");
        break;
    default:
        alert("Sản phẩm bạn tìm không tồn tại");
}