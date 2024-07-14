// console.log("123");

// ===================Khai báo mảng===================
arrMang = ["a", "b", "c", "d", "e"];
// Mỗi phần tử là mỗi index: bắt đầu từ 0
// console.log("🚀 ~ arrMang:", arrMang);

//===================Lấy ra một giá trị trong mảng===================
// console.log(arrMang[0]);
document.getElementById("chuCai").innerHTML = arrMang[2];

//===================Thay đổi giá trị của mảng===================
arrMang[4] = "f";
console.log("🚀 ~ arrMang:", arrMang);

//===================Lấy ra chiều dài của mảng & xử lý trong từng trường hợp===================
// chiều dài của mảng sẽ tính từ 1 trở lên khác với index
length = arrMang.length;
// console.log("🚀 chieuDai:", arrMang.length);

//===================Duyệt mảng: In ra màn hình console.log, vì lấy theo chiều dài của mảng nên khi sữ dụng vòng lặp sẽ là index < .length===================

var content = "";

for (var index = 0; index < arrMang.length; index++) {
  console.log("duyệt mảng", arrMang[index]);
  content += `<p class="badge bg-success">` + arrMang[index] + `</p>`;
  //   console.log("🚀 ~ content:", content);
}
document.getElementById("content-array").innerHTML = content;

// //===================Thêm một giá trị vào mảng===================
// //( có thể thêm 1 lần nhiều giá trị)
// // arr.push() ( thêm giá trị vào cuối mảng - index sẽ không bị thay đổi - thường sữ dụng)
// arrMang.push("g");
// console.log(arrMang);

// // arr.unshift() ( thêm giá trị vào đầu mảng - sẽ đẩy lùi các mảng ban đầu => index bị thay đổi - ít sữ dụng)
// arrMang.unshift("ă");
// console.log(arrMang);

//===================Xóa một giá trị trong mảng ===================
//splice(): Xóa một hoặc nhiều giá trị trong mảng => thay đổi index & length của mảng

//arr.splice(vị trí index, 1( là xóa chỉnh nó) ~~ 2,3,4 (là các vị trí tiếp theo sau nó)) ~~ Nhưng ít ai xóa 2,3,4... phần lớn sẽ sd 1 là xóa chính vị trí index mình chọn.
arrMang.splice(2, 1);
console.log("🚀 ~ arrMang:", arrMang);

//=================== DOM QUA TAGNAME ===================

var arrTagName = document.getElementsByTagName("section");
console.log("🚀 ~ arrTagName:", arrTagName);
arrTagName[1].innerHTML = "Nguyễn Tiến Nhân đẹp trai pr0 m4x";
arrTagName[1].style.color = "red";

// duyệt mãng này
for (var index = 0; index < arrTagName.length; index++) {
  arrTagName[index].className = "badge bg-warning m-2";
}

//=================== DOM QUA CLASSNAME ===================

var arrTagClass = document.getElementsByClassName("txt");
console.log("🚀 ~ arrTagClass:", arrTagClass);

// duyệt mãng này
for (var index = 0; index < arrTagClass.length; index++) {
  arrTagClass[index].innerHTML = "Hello Nhân đẹp trai";
  // lưu ý khi muốn thêm class tiếp phải giữ lại class cũ
  arrTagClass[index].className = "txt alert alert-dark";
}

//=================== DOM QUA QUERYSELECTOR ~ KHI DOM ĐẾN 1 THẺ DÙNG CÁI NÀY ===================
/**
 Khi sữ dụng queryselector chỉ lấy thẻ đầu tiên của thẻ được dom tới. ( nêú không có thẻ nào khớp với selector được dom tới kết quả là undefine)
    
 Cú pháp:
 khi lấy theo id thì thêm dấu # trước, khi lấy qua class thì dấu . trước
 document.querySelector(~ lấy qua id: #id ~~ lấy qua class: .class)                 
 */
document.querySelector("#btnSubmit").onclick = function () {
  //   alert(123);
  var ptxt = document.querySelector(".p-txt").innerHTML;
  alert(ptxt);
};

//=================== DOM QUA QUERYSELECTOR ALL - KHI DOM ĐẾN NHIỀU THẺ DÙNG CÁI NÀY. ===================
/**
 Khi sữ dụng queryselector all thì kết quả trả về sẽ là một mảng. Lưu ý nếu như chỉ có 1 thẻ khớp thì vẫn sẽ trả về 1 mảng và mảng đó chỉ có 1 phần tử. Nếu không có thẻ nào khớp thì sẽ trả về một mảng rổng [].

 */
document.querySelector("#btnDangNhap").onclick = function () {
  //   alert(123);
  var tagInput = document.querySelectorAll(".card-body input");
  console.log("🚀 ~ tagInput:", tagInput);
  tagInput[0].value;
  tagInput[1].value;
  console.log("🚀 ~ tagInput:", tagInput[0].value);
};
