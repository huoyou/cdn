/*
 * @Description: 手机侧边栏默认不展开
 * @Autor: huoyou
 * @Date: 2021-12-03 12:24:07
 * @LastEditTime: 2021-12-06 12:30:03
 */
/* 手机侧边栏默认不展开 */
var dom = $("#sidebar-menus .menus_item");
dom.each(function() {
  $(this).find(".site-page").addClass("hide")
})
