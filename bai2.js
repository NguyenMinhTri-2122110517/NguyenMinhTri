function str_limit(str,limit=10) {
    //xoa tag html
    str = str.replace(/<[^>]*>/g,"");
    // Xoa ky tu trang dau va cuoi
    str = str.trim();
    // tim kiem 2 khoang trang
    str = str.replace(/\s+/g," ");
    //chuyen chuoi thanh in hoa
    str = str.toLowerCase();
    //chuyen ky tu dau thanh hoa
    const mang = str.split(" ");
    const mangmoi =mang.slice(0,limit);
    str = mangmoi.join(" ");
    return str; 
}
let str = "<a> Lunar New Year Festival often falls between late January and early February; it is among the most important holidays in Vietnam. Officially, the festival includes the 1st, 2nd, and 3rd day in Lunar Calendar; however, Vietnamese people often spend nearly a month celebrating this special event. Tet Holiday gets its beginning marked with the first day in the Lunar Year; however, its preparation starts long before that. ";
console.log(str.length);

str = removeSpace(str);
console.log(str);