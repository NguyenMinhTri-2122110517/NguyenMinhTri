let maSV = prompt("Nhập mã sinh viên :");

if (isValidMaSV(maSV)) {
    alert("Mã sinh viên đúng!");
} 
else {
    let confirm = confirm("Mã sinh viên không đúng. Yêu cầu nhập lại?");
    if (confirm) {
        maSV = prompt("Nhập lại mã sinh viên :");
        if (isValidMaSV(maSV)) {
            alert("Mã sinh viên đúng!");
        }
        else {
            alert("Mã sinh viên không đúng. Xin vui lòng liên hệ quản trị viên.");
        }
    }
    else {
        alert("Bạn đã chọn huỷ.");
    }
}

