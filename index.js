/*=============== KHAI BÁO =========*/
// Khai báo biến để lưu trữ giá thông tin cần dùng, để thực hiện thao tác từ user

// ~Các kiểu giá trị cơ sở
// ~ Cách check kiểu dữ liệu: console.log(typeof(number, hoặc hoVaTen, hoặc result,...));

var number = 1; // kiểu dữ liệu số ~ number không có dấu nháy để +-*/
console.log("🚀 ~ number:", number);

var hoVaTen = "Tiến Nhân"; // kiểu dữ liệu string ~ nằm trong dấu nháy ~ họ tên, địa chỉ, thông tin cá nhân,...
console.log("🚀 ~ hoVaTen:", hoVaTen);

var result = true; // giá trị true hoặc false mang tính đúng sai ~ boolean -> kiểu luận lý
console.log("🚀 ~ result:", result);

var name1; //undefine ~ biến chưa có giá trị

var info = null; // null ~ biến rỗng, chưa có giá trị

/*========== TOÁN TỬ ===========*/
// (* / + - ) ~ % ( chia lấy dư )
var number1 = 5;
var number2 = 11;
var tong = number1 + number2;
var chiaDu = number2 % number1;
console.log("Tổng =", tong);
console.log("Chia Lấy Dư =", chiaDu);

// => Nếu cộng 2 chuỗi, sẽ nối 2 chuỗi lại với nhau.

/*======== PHÉP GÁN & TÍNH RÚT GỌN ================*/
/*
x++ tăng thêm 1 đơn vị cho x ~~ x = x + 1; x += 1
x-- giảm 1 đơn vị cho x ~~ x = x - 1; x -= 1
+= vd: x = x + y; phép gán x += y
-= vd: x = x - y; phép gán x -= y
*= vd: x = x * y; phép gán x *= y
/= vd: x = x / y; phép gán x /= y
*/
// ex: phép gán và tính rút gọn
var i = 1;
i = i + 1; //2
i++; //3
i--; //2
i += 2; //4
i *= 2; //8
console.log("🚀 ~ i:", i);
/*======== HẰNG SỐ ( KHÔNG THAY ĐỔI ~ KHÔNG THỂ GÁN BIẾN VỚI GIÁ TRỊ KHÁC) ================*/
// ~ Khai báo hằng số, khuyến cáo sữ dụng CHU_IN_HOA để dễ tìm hằng số.
const CHU_IN_HOA = 1; //~ Cách khai báo const.

/*======== MÔ HÌNH 3 KHỐI ~ QUAN TRỌNG ================*/
/** Xác định mô hình 3 khối, logic đễ viết được js.
 * b1: Đầu vào ~ input ( phải xác định được ngay từ đầu)
 * b2: Xữ lý ~ Progress (2 bước đầu vào và đầu ra xác định được thì mới xữ lý được)
 * b3: Đầu ra ~ output ( phải xác định được ngay từ đầu)
 */

//ex: Viết lương nhân viên 1 tháng 26 ngày, dựa trên lương là 20$

//Input
var luong1Ngay = 20;
var soNgayLam = 26;
//Output
var soLuong = 0;
// Xữ lý
soLuong = luong1Ngay * soNgayLam;
console.log("Tổng lương =", soLuong);

//ex2: viết chương trình nhập chiều dài & rộng. Tính chu vi và diện tích

//Input
var chieuDai = 5;
var chieuRong = 3;
//Output
var dienTich = 0;
var chuVi = 0;
//Xữ lý
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;
console.log("🚀 ~ dienTich:", dienTich);
console.log("🚀 ~ chuVi:", chuVi);

//ex3: Tính tổng 3 ký số => ví dụ 585.

//Input
var number = 492;
//Output
var ketQua = 0;
//Xữ lý
hangDonVi = number % 10;
console.log("🚀 ~ hangDonVi:", hangDonVi);
hangChuc = Math.floor(number / 10) % 10;
console.log("🚀 ~ hangChuc:", hangChuc);
hangTram = Math.floor(number / 100);
console.log("🚀 ~ hangTram:", hangTram);

ketQua = hangDonVi + hangChuc + hangTram;
console.log("🚀 ~ ketQua:", ketQua);

/*======== TRUY XUẤT THẺ THÔNG QUA ID (DOM) ================*/

var tagH3 = document.getElementById("title");

// .innerHTML = '...'; Thay đổi phần nội dung giữa 2 thẻ đóng mở HTML
tagH3.innerHTML = "Nguyễn Tiến Nhân Đẹp Trai ~ đã js";

// .value = '...'; phần nội dung của thẻ input thường chứa giá trị người dùng nhập vào.
var tagInput = document.getElementById("txt");

// Thay đổi nội dung bằng value.
tagInput.value = "Hello Anh Nhân Đẹp Trai ~ đã js";

// Truy xuất đến giá trị value của thẻ
var tagInputNumber = document.getElementById("number").value;
console.log("🚀 ~ tagInputNumber:", tagInputNumber);
// alert(tagInputNumber);
var tagInputNumber = document.getElementById("number");
console.log("🚀 ~ tagInputNumber:", tagInputNumber.value);

//Hiển thị trên alert
// alert(tagInputNumber.value);

//Thay đổi nội dung hình ảnh ~ .src: là nội dung hình ảnh của thẻ img
var tagImg = document.getElementById("hinh1");
tagImg.src = "./img/Tho.jpg"; // Đã đổi thành hình khác

/*======== SỰ KIỆN VÀ HÀM CƠ BẢN ~ function ~~ handleEvent================*/
// Dùng để thực thi 1 loạt hành động sau khi user click
// function tenHam() ~ thêm onclick ="tenHam()" ở button
function sayHello() {
  alert("chào Anh Nhân Đẹp Trai ạ!");
}

//VD1: Nhập Vào 1 Giá Trị và In Giá Trị

function hienThi() {
  //input
  var giaTriNhap = document.getElementById("nhapGiaTri").value;
  console.log("🚀 ~ hienThi ~ giaTriNhap:", giaTriNhap);

  //Progress & output
  document.getElementById("hienThiKetQua").innerHTML = giaTriNhap;
  document.getElementById(
    "text"
  ).innerHTML = `<p>Chào mừng đến với <strong>Tiến Nhân Đẹp Trai</strong>!</p>${giaTriNhap}`;
}

// VD2: Nhập Lương 1 giờ và số giờ làm => Tính Tổng Lương

function tinhTien() {
  // INPUT
  var tienLuong1H = document.getElementById("tienLuong1H").value * 1;
  // console.log("🚀 ~ tinhTien ~ tienLuong1H:", tienLuong1H);
  var soGioLam = document.getElementById("soGioLam").value * 1;
  // console.log("🚀 ~ tinhTien ~ soGioLam:", soGioLam);
  var tongTien = 0;

  //PROGRESS
  tongTien = tienLuong1H * soGioLam;
  // console.log("🚀 ~ tinhTien ~ tongTien:", tongTien);

  //OUTTPUT
  document.getElementById(
    "hienThiKetQuaVD2"
  ).innerHTML = `${tongTien.toLocaleString()}VNĐ`;
}

// VD3: XỮ LÝ ĐĂNG NHẬP

var logIn = (document.getElementById("btnLogin").onclick = function () {
  //  tên gọi là: anonymous function
  // alert(123);

  //INPUT
  var account = document.getElementById("account").value;
  console.log("🚀 ~ logIn ~ account:", account);
  var pass = document.getElementById("pass").value;
  console.log("🚀 ~ logIn ~ pass:", pass);
  var notification = "";
  // PROGRESS
  notification = `account:${account} & pass:${pass}`;
  console.log("🚀 ~ logIn ~ notification:", notification);
  //OUTPUT
  var tagResult = document.getElementById("result");
  tagResult.innerHTML = `<p>Kết Quả Trả Về:</p> ${notification}`;
  // tagResult.style.backgroundColor = `red`;
  // tagResult.style.color = `#FFF`;
  // tagResult.style.display = `flex`;
  // tagResult.style.fontSize = `20px`;
  // tagResult.style.borderRadius = `0`;
  tagResult.className = `bg-danger mb-5 text-white d-flex fs-5 rounded `;
});

// VD4: TÍNH TIỀN TIPS
var VD4 = document.getElementById("VD4");
VD4.style.backgroundColor = `blue`;
VD4.style.color = `yellow`;
var tinhTien = (document.getElementById("btnTinhTien").onclick = function () {
  //  tên gọi là: anonymous function
  // alert("nín non sàm xì");

  //INPUT
  var tongTien = document.getElementById("tongTien").value * 1;
  // console.log("🚀 ~ tinhTien ~ tongTien:", tongTien);
  var phanTramTip = document.getElementById("phanTramTips").value * 1;
  // console.log("🚀 ~ tinhTien ~ phanTramTip:", phanTramTip);
  var soNguoiTip = document.getElementById("soNguoiTip").value * 1;
  // console.log("🚀 ~ tinhTien ~ soNguoiTip:", soNguoiTip);
  var soTienTip = 0;

  //PROGRESS
  soTienTip = (tongTien * phanTramTip) / 100 / soNguoiTip;

  //OUTPUT
  document.getElementById(
    "soTienTipMoiNguoi"
  ).innerHTML = `${soTienTip.toLocaleString()}$`;
  console.log("🚀 ~ tinhTien ~ soTienTip:", soTienTip);
});
