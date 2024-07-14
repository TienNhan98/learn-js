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

//VÍ DỤ 5: XÁC ĐỊNH SỐ NGUYÊN TỐ
document.getElementById("btnTinh_5").onclick = function () {
  //input
  var nhapSo_5 = document.getElementById("nhapSo_5").value * 1;
  //output
  var ketQua_5 = "";
  //progress
  // Bước 1: Xác định yếu tố thay đổi ( Khởi tạo bước nhảy)
  var count_5 = 1;
  var dem = 0;
  // Bước 2: Thiết lập điều kiện lặp
  while (count_5 <= nhapSo_5) {
    // bước 3: Cài đặt khối xữ lý
    if (nhapSo_5 % count_5 == 0) {
      // nếu chia hết
      dem++;
    }
    // Bước 4: Thay đổi giá trị của biến bước nhảy
    count_5++;
  }
  //kiểm tra số bước nhảy của dem
  if (dem == 2) {
    ketQua_5 = nhapSo_5 + " là số nguyên tố";
  } else {
    ketQua_5 = nhapSo_5 + " không phải là số nguyên tố";
  }
  document.getElementById("ketQua_5").innerHTML = ketQua_5;
};

// VÍ DỤ 6: NHẬP SỐ IN NGÔI SAO
// Các yếu tố xác định bài toán lặp: Logic lặp đi lặp lại một cách tự động thì đó sẽ là bài toán lặp

// Bước 1: Xác định yếu tố thay đổi ( Khởi tạo bước nhảy)
// Bước 2: Thiết lập điều kiện lặp
// Bước 3: Cài đặt khối xữ lý
// Bước 4: Thay đổi giá trị của biến bước nhảy
document.getElementById("btnTinh_6").onclick = function () {
  // Cách làm theo vòng lặp while
  //input
  var nhapSo_6 = document.getElementById("nhapSo_6").value * 1;
  //output
  var ketQua_6 = "";
  // //progress
  // // Bước 1: Xác định yếu tố thay đổi ( Khởi tạo bước nhảy)
  // var count_6 = 1;
  // // Bước 2: Thiết lập điều kiện lặp
  // while (count_6 <= nhapSo_6) {
  //   // điều kiện lặp
  //   ketQua_6 += "*";
  //   count_6++;
  // }

  //Cách làm theo vòng lặp for
  // //progress
  for (var count_6 = 1; count_6 <= nhapSo_6; count_6++) {
    ketQua_6 += "*";
  }
  document.getElementById("ketQua_6").innerHTML = ketQua_6;
};

// VÍ DỤ 7: NHẬP SỐ IN NGÔI SAO THEO HÀNG VÀ CỘT ( SD VÒNG LẶP FOR LỒNG NHAU)
document.getElementById("btnTinh_7").onclick = function () {
  //input
  var soHang = document.getElementById("nhapSoHang_7").value * 1;
  var soCot = document.getElementById("nhapSoCot_7").value * 1;
  //output
  var ketQua_7 = "";
  for (iSao = 1; iSao <= soHang; iSao++) {
    // cách 1: làm bth
    // for (soSao = 1; soSao <= soCot; soSao++) {
    //   ketQua_7 += "*";
    // }

    // cách 2: sữ dụng hàm
    var htmlsoSao = in1Hang(soCot);
    ketQua_7 += htmlsoSao + "</br>";
  }
  document.getElementById("ketQua_7").innerHTML = ketQua_7;
};
function in1Hang(soSao) {
  //input
  //output
  var ketQua = "";
  for (var i = 1; i <= soSao; i++) {
    ketQua += "*";
  }
  return ketQua;
}

// VÍ DỤ 8: NHẬP SỐ NGUYÊN TỐ, IN SỐ NGUYÊN TỐ BÉ HƠN HOẶC BẰNG SỐ NHẤP
document.getElementById("btnTinh_8").onclick = function () {
  //input = number
  var nhapSo8 = document.getElementById("nhapSo_8").value * 1;
  //output = number
  var ketQua8 = "";
  //progress
  for (var iSo = 2; iSo <= nhapSo8; iSo++) {
    // //phải kiểm tra từng số
    // // kiểm tra iSo có phải là số nguyên tố hay không
    // var checkSNT = true;
    // for (var i = 2; i <= Math.sqrt(iSo); i++) {
    //   if (iSo % i === 0) {
    //     checkSNT = false;
    //     break;
    //   }
    // }
    // if (checkSNT) {
    //   ketQua8 += iSo + "  ";
    // }
    var checkSNT = kiemTraSoNguyenTo(iSo);
    if (checkSNT) {
      ketQua8 += iSo + " ";
    }
  }
  document.getElementById("ketQua_8").innerHTML = ketQua8;
};

function kiemTraSoNguyenTo(number) {
  //input
  //output
  var checkSNT = true;
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      checkSNT = false;
      break;
    }
  }
  return checkSNT;
}
