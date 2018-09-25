var callBtns = $(".js_call-btn");
var hiddenBlocks = $(".js_hidden-block");
callBtns.click(function(e) {
  e.preventDefault();
  //Зупинити вспливання події
  e.stopPropagation();
  //   Знайти найближчий блок по селектору
  var target = $(this).siblings(".js_hidden-block");
  target.toggleClass("is-active");
  hiddenBlocks.not(target).removeClass("is-active");
});

$(document).click(function(e) {
  hiddenBlocks.removeClass("is-active");
});

hiddenBlocks.click(function(e) {
  e.stopPropagation();
  var target = $(e.target);
  if (target.hasClass("js_close")) {
    $(this).removeClass("is-active");
  }
});

// slider init
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  prevArrow:
    '<div class="arr arr--left"><i class="fico fico-arr-left"></i></div>',
  nextArrow:
    '<div class="arr arr--right"><i class="fico fico-arr-right"></i></div>',
  dotsClass: "container slick-dots"
});
