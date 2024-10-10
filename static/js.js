function revealMessage() {
    document.getElementById('message').style.display = 'block';
}

// ฟังก์ชันเมื่อกดปุ่มแล้วให้มีอนิเมชันเลื่อน
document.getElementById('linkBtn').addEventListener('click', function (e) {
    e.preventDefault(); // ป้องกันการเปิดลิงก์ทันที
    var linkBtn = this;
    linkBtn.classList.add('active'); // เพิ่มคลาส active เพื่อเริ่มอนิเมชัน
    setTimeout(function () {
        window.location.href = linkBtn.href; // เปิดลิงก์หลังจากอนิเมชัน
    }, 1000); // หน่วงเวลา 1 วินาทีก่อนเปิดลิงก์
});