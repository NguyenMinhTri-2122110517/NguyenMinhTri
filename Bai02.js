const monHocForm = document.getElementById('monHocForm');
const monHocList = document.getElementById('monHocList');

monHocForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const tenMonHoc = document.getElementById('tenMonHoc').value;

    const li = document.createElement('li');
    li.textContent = tenMonHoc;
    monHocList.appendChild(li);

    monHocForm.reset(); // Xóa nội dung form
});
