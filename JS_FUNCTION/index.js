/*============== FUNCTION ============ */
/**
 Dùng đễ tái sữ dụng logic code lặp đi lặp lại nhiều lần
 */
//  VÍ DỤ DÙNG HÀM FUNCTION
function inNoiDung(id, noiDung) {
  // tham số truyền vào. id, noiDung là tên bất kì
  document.getElementById(id).innerHTML = noiDung;
  document.getElementById(id).style.backgroundColor = "#fff";
} // => Khai báo hàm ( Chưa được gọi ra) hoặc các tham số cần chỉnh sửa

// GỌI HÀM
inNoiDung("theP", "Nguyễn Tiến Nhân");
inNoiDung("theS", "Đẹp trao pr0mAx");
inNoiDung("theH", "Siêu Cấp VjpPr0");

/*============== FUNCTION RETURN ~ HÀM CÓ GIÁ TRỊ TRẢ VỀ============ */
function tinhLuong(soGioLam, tienLuongH) {
  //xữ lý
  var tienLuong = soGioLam * tienLuongH;
  //   console.log("🚀 ~ tinhLuong ~ tienLuong:", tienLuong);
  //output
  return tienLuong;
}
tinhLuong(5, 100);

// xữ Lý thêm
var tongTien = tinhLuong(5, 100);
console.log("🚀 ~ tongTien:", tongTien);
tongTien += 100;
console.log("🚀 ~ tongTien:", tongTien);

// VÍ DỤ DÙNG HÀM FUNCTION RETURN
// ex1: TÍNH ĐIỂM TRUNG BÌNH 3 MÔN CỦA 2 KHỐI A & C
document.getElementById("btnDTB").onclick = function () {
  // alert("nừn xỏn xảm xỉ");
  // khối A
  var diemToan = document.getElementById("diemToan").value * 1;
  var diemLy = document.getElementById("diemLy").value * 1;
  var diemHoa = document.getElementById("diemHoa").value * 1;
  var TBKA = tinhDiemTB(diemToan, diemLy, diemHoa);
  document.getElementById("diemTrungBinhA").value = TBKA;

  // khối C
  var diemVan = document.getElementById("diemVan").value * 1;
  var diemSu = document.getElementById("diemSu").value * 1;
  var diemDia = document.getElementById("diemDia").value * 1;
  var TBKC = tinhDiemTB(diemVan, diemSu, diemDia);
  document.getElementById("diemTrungBinhC").value = TBKC;
};
function tinhDiemTB(diem1, diem2, diem3) {
  //input
  //progress
  var dtb = 0;
  dtb = (diem1 + diem2 + diem3) / 3;
  //output dtb
  return dtb;
}

// BÀI TẬP ZOOMIN ZOOMOUT
// BÀI TẬP 1: ZOOM ICON
document.getElementById("btnPlus").onclick = function () {
  // ======== CHƯA DÙNG FUNCTION RETURN
  // var fontSize = document.getElementById("iconOne").style.fontSize;
  // // ở đơn vị fontsize đang là chuỗi có chữ px => phải làm mất chữ px thì mới cộng đơn vị number được. dưới dây là cách thực hiện
  // var fSize = fontSize.replace("px", "") * 1;
  // fSize += 5; // fSize = fSize + 5;
  // // console.log("🚀 ~ fSize:", fSize);
  // document.getElementById("iconOne").style.fontSize = fSize + "px";
  // // =========== DÙNG FUNCTION RETURN 1
  // var tagID = domID("iconOne");
  // // ở đơn vị fontsize đang là chuỗi có chữ px => phải làm mất chữ px thì mới cộng đơn vị number được. dưới dây là cách thực hiện => *1 để thực hiện phép tính
  // var fontSize = tagID.style.fontSize.replace("px", "") * 1;
  // tagID.style.fontSize = fontSize + 5 + "px";
  // console.log("🚀 ~ fontSize:", fontSize);
  // =========== DÙNG FUNCTION RETURN 1 & 2
  fixFont(5, "iconOne");
};

document.getElementById("btnReduce").onclick = function () {
  // ======== CHƯA DÙNG FUNCTION RETURN
  // var fontSize = document.getElementById("iconOne").style.fontSize;
  // // ở đơn vị fontsize đang là chuỗi có chữ px => phải làm mất chữ px thì mới cộng đơn vị number được. dưới dây là cách thực hiện
  // var fSize = fontSize.replace("px", "") * 1;
  // fSize -= 5; // fSize = fSize - 5;
  // // console.log("🚀 ~ fSize:", fSize);
  // document.getElementById("iconOne").style.fontSize = fSize + "px";

  // // =========== DÙNG FUNCTION RETURN 1
  // var tagID = domID("iconOne");
  // // ở đơn vị fontsize đang là chuỗi có chữ px => phải làm mất chữ px thì mới cộng đơn vị number được. dưới dây là cách thực hiện => * 1 để thực hiện phép tính
  // var fontSize = tagID.style.fontSize.replace("px", "") * 1;
  // tagID.style.fontSize = fontSize - 5 + "px";
  // console.log("🚀 ~ fontSize:", fontSize);
  // =========== DÙNG FUNCTION RETURN 1 & 2
  fixFont(-5, "iconOne");
};
// BÀI TẬP 2: ZOOM TEXT

document.getElementById("btnPlus2").onclick = function () {
  // =========== DÙNG FUNCTION RETURN 1
  // var tagID = domID("txtOne");
  // ở đơn vị fontsize đang là chuỗi có chữ px => phải làm mất chữ px thì mới cộng đơn vị number được. dưới dây là cách thực hiện => *1 để thực hiện phép tính
  // var fontSize = tagID.style.fontSize.replace("px", "") * 1;
  // tagID.style.fontSize = fontSize + 2 + "px";
  // console.log("🚀 ~ fontSize:", fontSize);
  // =========== DÙNG FUNCTION RETURN 1 & 2
  fixFont(2, "txtOne");
};

document.getElementById("btnReduce2").onclick = function () {
  // // =========== DÙNG FUNCTION RETURN 1
  // var tagID = domID("txtOne");
  // // ở đơn vị fontsize đang là chuỗi có chữ px => phải làm mất chữ px thì mới cộng đơn vị number được. dưới dây là cách thực hiện => *1 để thực hiện phép tính
  // var fontSize = tagID.style.fontSize.replace("px", "") * 1;
  // tagID.style.fontSize = fontSize - 2 + "px";
  // console.log("🚀 ~ fontSize:", fontSize);
  // =========== DÙNG FUNCTION RETURN 1 & 2
  fixFont(-2, "txtOne");
};
