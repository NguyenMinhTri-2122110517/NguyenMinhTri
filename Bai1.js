const form = document.createElement("form");
form.innerHTML = `
  <label for="maSV">Mã SV:</label>
  <input type="text" id="maSV" name="maSV"><br><br>
  <label for="hoTen">Họ Tên:</label>
  <input type="text" id="hoTen" name="hoTen"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <label for="dienThoai">Điện Thoại:</label>
  <input type="tel" id="dienThoai" name="dienThoai"><br><br>
  <label for="lop">Lớp:</label>
  <input type="text" id="lop" name="lop"><br><br>
  <input type="submit" value="Submit">
`;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateMaSV(document.getElementById("maSV").value)) {
    alert("Mã SV không hợp lệ");
    return;
  }
  if (!validateHoTen(document.getElementById("hoTen").value)) {
    alert("Họ Tên không được để trống");
    return;
  }
  if (!validateEmail(document.getElementById("email").value)) {
    alert("Email không hợp lệ");
    return;
  }
  if (!validateDienThoai(document.getElementById("dienThoai").value)) {
    alert("Điện Thoại không hợp lệ");
    return;
  }
  if (!validateLop(document.getElementById("lop").value)) {
    alert("Lớp không hợp lệ");
    return;
  }
  // kiem tra form
  console.log("Form is valid, submitting...");
});

//kiem tra mssv
function validateMaSV(maSV) {
  return /^21\d{8}$/.test(maSV);
}

// kiem tra ho ten
function validateHoTen(hoTen) {
  return hoTen.trim() !== "";
}

// kiem tra email
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// kiem tra dien thoai
function validateDienThoai(dienThoai) {
  return /^(0[1-9]|1[0-9]|2[0-9]|3[0-9]|5[0-9]|7[0-9]|8[0-9]|9[0-9])\d{8}$/.test(dienThoai);
}

// kiem tra lop
function validateLop(lop) {
  if (lop.length === 8 || lop.length === 9) {
    if (lop.startsWith("CCQ")) {
      const middlePart = lop.slice(3, 7);
      if (!/^\d{4}$/.test(middlePart)) {
        return false;
      }
      const lastPart = lop.slice(-1);
      if (lastPart.length === 1 || lastPart.length === 2) {
        return true;
      }
    }
  }
  return false;
}