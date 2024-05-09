const themsv = document.querySelector("#themsv"); 

themsv.addEventListener("click", function(){
    //Lấy thông tin sinh viên và tạo đối tượng sinh viên
    const sinhvien = {
        masv: document.querySelector("#masv").value,
        hoten: document.querySelector("#hoten").value,
        lop: document.querySelector("#lop").value,
        ngaysinh: document.querySelector("#ngaysinh").value,
        showSinhVien: function() {
            const show = document.querySelector("#show");
            const str_new = `
            <tr>
                <td>${this.masv}</td>
                <td>${this.hoten}</td>
                <td>${this.lop}</td>
                <td>${this.ngaysinh}</td>
            </tr>
            `;
            show.innerHTML += str_new;
        }
    }
    sinhvien.showSinhVien();
});
