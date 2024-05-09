// Hàm tính tổng
function add(a, b) {
    return a + b;
}

// Hàm tính hiệu
function subtract(a, b) {
    return a - b;
}

// Hàm tính tích
function multiply(a, b) {
    return a * b;
}

// Hàm tính thương
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// Hàm tính căn bậc hai
function squareRoot(a) {
    if (a < 0) {
        return "Loi chuong trinh";
    }
    return Math.sqrt(a);
}

// Hàm tính lũy thừa
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Ví dụ sử dụng các hàm
console.log("1 + 2 =", add(1, 2));
console.log("1 - 2 =", subtract(1, 2));
console.log("1 * 2 =", multiply(1, 2));
console.log("1 / 2 =", divide(1, 2));
console.log("Square root of 25 =", squareRoot(9));
console.log("2 ^ 3 =", power(2, 3));