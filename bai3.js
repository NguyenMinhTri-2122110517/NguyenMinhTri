function removeSpace(str) {
    // Loại bỏ các thẻ HTML
    str = str.replace(/<[^>]*>/g, "");

    // Loại bỏ các ký tự đặc biệt
    str = str.replace(/[^\w\s]/g, "");

    // Loại bỏ khoảng trắng và thay thế bằng dấu gạch dưới (_) hoặc dấu gạch ngang (-)
    str = str.replace(/\s+/g, "-");

    // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
    str = str.trim();
    return str;
}

let str = " <a> Nguyen Minh Tri";
console.log(str.length);

str = removeSpace(str);
console.log(str);
