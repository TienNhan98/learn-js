/**
 Các yếu tố xác định bài toán lặp: Logic lặp đi lặp lại một cách tự động thì đó sẽ là bài toán lặp
 
 Bước 1: Xác định yếu tố thay đổi ( Khởi tạo bước nhảy)
 Bước 2: Thiết lập điều kiện lặp
 Bước 3: Cài đặt khối xữ lý
 Bước 4: Thay đổi giá trị của biến bước nhảy


 */

// VÍ DỤ CHO PHÉP NGƯỜI DÙNG NHẬP 1 SỐ. IN RA SỐ THẺ DIV
document.getElementById("btnInThe").onclick = function () {
  // input: number
  var iSo = document.getElementById("iSo").value * 1;
  // output: string ~ chuỗi div
  var inThe = "";
  // progress
  // Bước 1
  var count = 1;
  // Bước 2
  while (count <= iSo) {
    // còn đúng thì còn in
    //Bước 3
    var div =
      '<div class="alert alert-success">Nguyễn Tiến Nhân Đẹp Trai Pr0 Max</div>';
    inThe += div;
    //Bước 4
    count++;
  }
  document.getElementById("ketQua").innerHTML = inThe;
};

// VÍ DỤ2: TÍNH GIAI THỪA
document.getElementById("btnTinhGiaiThua").onclick = function () {
  //input
  var nhapSo = document.getElementById("nhapSo").value * 1;
  //output
  var giaiThua = 1;
  //progress
  //Bước 1: Xác định yếu tố thay đổi ( Khởi tạo bước nhảy)
  var giaTri = 1;
  // Bước 2: Thiết lập điều kiện lặp
  while (giaTri <= nhapSo) {
    // điều kiện lặp
    // bước 3: Cài đặt khối xữ lý
    giaiThua *= giaTri;
    // bước 4: Thay đổi giá trị của biến bước nhảy
    giaTri++;
  }
  document.getElementById("ketQua2").innerHTML = giaiThua;
};

// VÍ DỤ 3: TÍNH TỔNG TỪ 1 ĐẾN n
document.getElementById("btnTinhTong").onclick = function () {
  //input
  var nhapSo2 = document.getElementById("nhapSo2").value * 1;
  //output //5
  var tinhTong = 0;
  //progress
  // Bước 1: Xác định yếu tố thay đổi ( Khởi tạo bước nhảy)
  var count2 = 0;
  // Bước 2: Thiết lập điều kiện lặp
  while (count2 <= nhapSo2) {
    // điều kiện lặp
    // bước 3: Cài đặt khối xữ lý
    tinhTong += count2;
    // Bước 4: Thay đổi giá trị của biến bước nhảy
    count2++;
  }
  document.getElementById("ketQua3").innerHTML = tinhTong;
};
// VÍ DỤ 4: TÍNH TỔNG TỪ 1 ĐẾN N(NHƯNG MÀ TÍNH SỐ CHẲN)
document.getElementById("btnTinhTong_4").onclick = function () {
  //input
  var nhapSo_4 = document.getElementById("nhapSo_4").value * 1;
  // output
  var tinhTong_4 = 0;
  //progress
  // Bước 1: Xác định yếu tố thay đổi ( Khởi tạo bước nhảy)
  var count_4 = 0;
  // Bước 2: Thiết lập điều kiện lặp
  while (count_4 <= nhapSo_4) {
    // điều kiện lặp
    // bước 3: Cài đặt khối xữ lý
    if (count_4 % 2 == 0) {
      tinhTong_4 += count_4;
    }
    // Bước 4: Thay đổi giá trị của biến bước nhảy
    count_4++;
  }
  document.getElementById("ketQua_4").innerHTML = tinhTong_4;
};
