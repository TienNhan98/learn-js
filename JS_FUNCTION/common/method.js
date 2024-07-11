//FUNCTION RETURN 1
function domID(id) {
  return document.getElementById(id);
}
//FUNCTION RETURN 2
function fixFont(size, id) {
  var tag = domID(id);
  // ở đơn vị fontsize đang là chuỗi có chữ px => phải làm mất chữ px thì mới cộng đơn vị number được. dưới dây là cách thực hiện => *1 để thực hiện phép tính
  var fontSize = tag.style.fontSize.replace("px", "") * 1;
  fontSize += size;
  tag.style.fontSize = fontSize + "px";
}
