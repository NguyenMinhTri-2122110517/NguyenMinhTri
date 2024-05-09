function removeSpace(str) {
    str = str.replace(/<[^>]*>/g,"");
    // Xoa ky tu trang dau va cuoi
    str = str.trim();
    // tim kiem 2 khoang trang
    str = str.replace(/\s+/g," ");
    //chuyen chuoi thanh in hoa
    str = str.toLowerCase();
    //chuyen ky tu dau thanh hoa
    const arr = str.split(" ");
    for(let i=0; i <arr.length;i++)
    {
        arr[i] = arr[i].charAt(0).toLowerCase()+ arr[i].slice(1);
    }
    str = arr.join(" ");
    return str; 
}
let str = " Nguyen Minh Tri ";
console.log(str.length);

str = removeSpace(str);
console.log(str);