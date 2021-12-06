/*
 * @Description: 修改标签颜色
 * @Autor: huoyou
 * @Date: 2021-12-03 12:24:07
 * @LastEditTime: 2021-12-06 11:28:43
 */
/* 修改标签颜色 */
// rgb方法
function changeColor() {
  var r = Math.round(255 * Math.random());
  var g = Math.round(255 * Math.random());
  var b = Math.round(255 * Math.random());
  var rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
}
// 十六进制方法
function change16Color() {
  var r = Math.round(255 * Math.random()).toString(16);
  var g = Math.round(255 * Math.random()).toString(16);
  var b = Math.round(255 * Math.random()).toString(16);
  var rgb2 = "#" + r + g + b;
  return rgb2;
}
var dom = $("#aside-content .card-tags .card-tag-cloud").children();
dom.each(function() {
  $(this).css("color", changeColor());
})
