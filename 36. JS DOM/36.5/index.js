// sử dụng querySelector để chọn thẻ a đầu tiên
const firstLink = document.querySelector("a");
console.log(firstLink);
// kiểm tra xem thẻ a có đc tìm thấy hay k
if(firstLink){
const linkHref = firstLink.getAttribute("href");
console.log(linkHref);
}else{
    console.log("Không tìm thấy thẻ a");
}

// set attribute
firstLink.setAttribute("target", "_blank");
// sử dụng querySelectorAll để chọn all các thẻ a trong ul
const links = document.querySelectorAll("ul a");
console.log(links);

links.forEach((singleLink) => {singleLink.setAttribute("target", "_blank")});



