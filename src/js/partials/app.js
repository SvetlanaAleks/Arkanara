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

$(document).ready(function() {
  var tabLinks = $(".js_tab-link");
  var menuList = $(".js_menu-list");

  tabLinks.click(function(e) {
    e.preventDefault();
    var $this = $(this);
    var menuTab = $this.parents(".trending__tabs");
    var menuItems = menuTab.find(".list");
    var parent = $this.parents(".list");
    console.log(menuItems);
    console.log(parent);

    menuItems.removeClass("list--active");
    parent.addClass("list--active");

    var target = $this.attr("href");
    var targetTab = $(target);

    menuList.removeClass("trending__list--active");
    targetTab.addClass("trending__list--active");
  });
});
