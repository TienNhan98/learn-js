/* =============== BOOLEAN ~ ĐỂ ÁP DỤNG CHO CẤU TRÚC ĐIỀU KIỆN ( RẺ NHÁNH ) ========== */

/**
 * ==== TOÁN TỬ LUẬN LÍ
 KIỂU LUẬN LÍ CÓ 2 GIÁ TRỊ "TRUE" HOẶC "FALSE"
 CHỨA GIÁ TRỊ PHÉP SO SÁNH
 */

/* ====== CÁC LOẠI TOÁN TỬ SO SÁNH ========== */

/**==================================================================================================================================
 
 1: PHÉP SO SÁNH

 - Bằng giá trị: ( == ) ~ nên nhớ 1 dấu "=" là gán giá trị.
 - Khác: ( != )
 - Bằng giá trị và kiểu: ( === )
 - Khác giá trị hoặc kiểu: ( !== )
 - Lớn hơn ( > ) Lớn hơn hoặc bằng ( >= )
 - Nhỏ hơn ( < ) Nhỏ hơn hoặc bằng ( <= )
 */
// VÍ DỤ: SO SÁNH
var a = 5;
var b = 10;
var c = 5;
console.log("a=", a, "b=", b, "c=", c);
console.log("a lớn b:", a > b);
console.log("a bé b:", a < b);
console.log("a bằng b ==:", a == b);
console.log("a lớn hoặc bằng b:", a >= b);
console.log("a bé hoặc bằng b:", a <= b); // ~ như trường hợp này bé hơn hoặc bằng sẽ lấy giá trị bé hơn => trả true
console.log("a bé hơn hoặc bằng c", a <= c); // ~ như trường hợp này bé hơn hoặc bằng sẽ lấy giá trị hoặc bằng => trả true
// Lớn hơn ~ bé hơn -- hoạc bằng: Sẽ lấy giá trị cả 2, nghĩa là: lấy hơn hơn,bé hơn hoặc có thể lấy bằng. trường hợp trên

var d = 7;
var e = "7"; //typeof d = 'number' ; e = 'string'

console.log("so sánh bằng", d == e); // trả true vì vscode sẽ chỉ lấy giá trị ( bằng giá trị)
console.log("bằng giá trị và kiểu", d === e); // trả false vì khác kiểu là typeof
console.log("khác !=", d != e); // trả false vì chỉ so sánh khác  giá trị.
console.log("khác giá trị và kiểu !==", d !== e); // trả true vì so sánh khác cả giá trị và kiểu là typeof

//===================================================================================================================================

/*
2: TOÁN TỬ LOGIC

- !: not - phủ định ~~ NGƯỢC LẠI ĐÚNG THÀNH SAI, SAI THÀNH ĐÚNG.
- &&: and - và ~~ ĐÚNG KHI TẤT CẢ ĐỀU ĐÚNG
- ||: or - hoặc ~~ ĐÚNG KHI MỘT TRONG 2 ĐÚNG 
 */
// VÍ DỤ: TOÁN TỬ LOGIC
var dk1 = true;
var dk2 = false;
var dk3 = true;
console.log("* dk1:", dk1, "dk2:", dk2, "dk3:", dk3);

console.log("&&=", dk1 && dk2 && dk3); //~ Trả false => Bắt buộc cả 3 điều kiện đều phải true
console.log("||=", dk1 || dk2 || dk3); //~ Trả true => Chỉ cần 1 trong 3 true sẽ trả true => nếu dk1,dk3 false => trả false vì cả 3 đều false
console.log("!=", "dk1:", !dk1, "dk2:", !dk2, "dk3:", !dk3); //~ Trả kết quả phủ điện của biến được khai báo. có thể sữ dụng (!! = phủ định của phủ đinh = xác định )

//===================================================================================================================================

/* =============== CẤU TRÚC ĐIỀU KIỆN ( RẺ NHÁNH ) ========== */
/**
 ==== CÚ PHÁP IF ====
 if ( biểu thức điều kiện ){
 Hành động
 }
 ==> nếu biểu thức điều kiện đúng => thực hiện hành động
 ==> nếu biểu thức điều kiện sai => không thực hiện
 */

/* VÍ DỤ 1: TÍNH TRỊ TUYỆT ĐỐI CỦA 1 SỐ */
document.getElementById("btnVD1").onclick = function () {
  //   alert("nứn xon xảm xi");
  var iSo = document.getElementById("i_So1").value * 1;
  var ketQua = iSo;
  if (iSo < 0) {
    ketQua = -iSo;
  }
  document.getElementById("result1").innerHTML = ketQua;
};

/**
 ==== CÚ PHÁP IF ELSE====
 if ( biểu thức điều kiện ){
 Hành động 1
 } else {hành động 2}
 ==> nếu biểu thức điều kiện đúng => thực hiện hành động 1
 ==> Còn lại => thực hiện hành động 2
 */

//  VÍ DỤ 2: NHẬP VÀO 1 SỐ, CHO RA KẾT QUẢ CHẲN - LẺ
document.getElementById("btnVD2").onclick = function () {
  // alert("nừn xon xảm xi");
  var iSo = document.getElementById("i_So2").value * 1;
  var result = " ";
  if (iSo % 2 == 0) {
    result = `${iSo}-Số Chẳn`;
  } else {
    result = `${iSo}-Số Lẻ`;
  }
  console.log("🚀 ~ result:", result);
  document.getElementById("result2").innerHTML = result;
};

/* ============= BÀI TẬP ==================== */
// BÀI TẬP 1: NHẬP ĐIỂM TRUNG BÌNH > 5 => ĐẬU VÀ NGƯỢC LẠI
document.getElementById("btnScore").onclick = function () {
  // alert("nừn xon xảm xi");
  var iScore = document.getElementById("i_Score").value * 1;
  var result = "";
  if (iScore > 10 || iScore == "" || iScore < 0 || isNaN(iScore)) {
    result = ` Nhập Sai Dữ Liệu`;
    alert("Vui lòng kiểm tra lại số điểm");
  } else if (iScore >= 5) {
    result = `${iScore}điểm -Bạn Đã Đậu`;
  } else {
    result = `${iScore}điểm -Bạn Đã Rớt`;
  }
  console.log("🚀 ~ result:", result);
  document.getElementById("resultScore").innerHTML = ` Kết quả:${result}`;
};

// BÀI TẬP 2: NHẬP VÀO 2 SỐ VÀ IN RA KẾT QUẢ SỐ LỚN HƠN

//CÁCH 1: LÀM KIỂU BÌNH THƯỜNG
// document.getElementById("btnNumber").onclick = function () {
//   // alert("nừn xon xảm xi");
//   var number1 = document.getElementById("i_One").value * 1;
//   var number2 = document.getElementById("i_Two").value * 1;
//   var result = "";
//   if (number1 > number2) {
//     result = number1;
//   } else {
//     result = number2;
//   }
//   console.log("🚀 ~ result:", result);
//   document.getElementById(
//     "resultNumber"
//   ).innerHTML = ` Kết Quả: Số ${result} lớn hơn`;
// };

//CÁCH 2: ĐẶT CỜ HIỆU LÀ ở ví dụ này là ( MAX = )
document.getElementById("btnNumber").onclick = function () {
  // alert("nừn xon xảm xi");
  var number1 = document.getElementById("i_One").value * 1;
  var number2 = document.getElementById("i_Two").value * 1;
  var max = number1;
  if (max < number2) {
    max = number2;
  }
  console.log("🚀 ~ max:", max);
  var result = max;
  document.getElementById(
    "resultNumber"
  ).innerHTML = ` Kết Quả: Số ${result} lớn hơn`;
};

//BÀI TẬP 3: TÍNH TIỀN CÔNG DỰA THEO SỐ GIỜ LÀM
document.getElementById("btnTinhTien").onclick = function () {
  var soGioLam = document.getElementById("soGioLam").value * 1;
  var tienCong = document.getElementById("tienCong").value * 1;
  var tongTien = 0;
  if (soGioLam <= 40) {
    tongTien = soGioLam * tienCong;
  } else {
    tongTien = 40 * tienCong + (soGioLam - 40) * tienCong * 1.5;
  }
  console.log("🚀 ~ tongTien:", tongTien);
  document.getElementById(
    "resultTien"
  ).innerHTML = ` Số tiền bạn nhận được là: ${tongTien.toLocaleString()}`;
};

/**
 ==== CÚ PHÁP IF ELSE IF====
 if ( biểu thức điều kiện1 ){
 Hành động 1
 } else if (biểu thức điều kiện 2) {hành động 2}
  else {hành động 3}
 ==> nếu biểu thức điều kiện 1 đúng => thực hiện hành động 1
 ==> nếu biểu thức điều kiện 1 sai, chạy biểu thức 2 đúng => thực hiện hành động 2
 ==> nếu 2 biểu thức điều kiện 1, 2 sai, chạy biểu thức 3 => thực hiện hành động 3
 */

//  BÀI TẬP 4: TÍNH ĐIỂM TRUNG BÌNH 3 MÔN -> XẾP LOẠI
var xepLoai = (document.getElementById("btnTinhDiem").onclick = function () {
  // alert("nừn xỏn xảm xi");
  var score1 = document.getElementById("diem1").value * 1;
  var score2 = document.getElementById("diem2").value * 1;
  var score3 = document.getElementById("diem3").value * 1;
  var diemTB = (score1 + score2 + score3) / 3;
  var result = "";
  if (diemTB > 10 || diemTB < 0 || isNaN(diemTB)) {
    result = ` Nhập Sai Dữ Liệu`;
    alert("Vui lòng kiểm tra lại số điểm");
  } else if (0 >= diemTB && diemTB < 5) {
    result = `Điểm Trung Bình Là: ${diemTB}, Không Đạt`;
  } else if (5 <= diemTB && diemTB < 8) {
    result = `Điểm Trung Bình Là: ${diemTB}, Đạt`;
  } else {
    result = `Điểm Trung Bình Là: ${diemTB}, Giỏi`;
  }
  console.log("🚀 ~ xepLoai ~ result:", result);
  document.getElementById("resultDiem").innerHTML = result;
});

/* ==== MỘT DẠNG TRƯỜNG HỢP SỮ DỤNG SWITCH CASE ==== */
// Thường sữ dụng trong trường hợp so sánh bằng === thì sẽ giúp chạy nhanh hơn
/**
 Cú Pháp:
 switch (biến cần xữ lí) {
 case giá trị của biến 1:{
  xữ lí};break;
 case giá trị của biến 2:{
  xữ lí};break;
 .....
 case giá trị của biến n:{
  xữ lí};break;
 default:{
  nằm ngoài vùng cần xữ lí cho ra kết quả không cần}
 }
 */
// VÍ DỤ SWITCH CASE:
var demSo = (document.getElementById("btnSC").onclick = function () {
  var soSC = document.getElementById("soSC").value * 1;
  var ketQua = "";
  switch (soSC) {
    case 1:
      {
        ketQua = "Số một";
      }
      break;

    case 2:
      {
        ketQua = "Số hai";
      }
      break;
    case 3:
      {
        ketQua = "Số ba";
      }
      break;
    case 4:
      {
        ketQua = "Số bốn";
      }
      break;
    default: {
      ketQua = ` Nhập số từ 1 -> 4 được thôi`;
    }
  }
  console.log("🚀 ~ demSo ~ ketQua:", ketQua);
  document.getElementById("resultSC").innerHTML = ketQua;
});
