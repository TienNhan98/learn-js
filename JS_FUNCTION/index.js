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
