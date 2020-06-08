jQuery(document).ready(function () {
  jQuery(".inventory__id-info").click(function () {
    jQuery(this).next().toggleClass("inventory__wrapper--show");
    jQuery(this).find(".inventory__id-count .las").toggleClass("las--rotate");
  });

  jQuery(".inventory__day-info").click(function () {
    jQuery(this).siblings().toggleClass("inventory__id-block--show");
    jQuery(this).find(".inventory__date .las").toggleClass("las--rotate");
  });
});
