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

for (let i = 0; i < 30; i++) {
  let item = `<div class="item">
  <div class="item__content">
     <div class="item__img-wrap">
        <img class="item__pick" src="img/new-item1.jpg" alt="product">
        <img class="item__pick" src="img/hover-item.jpg" alt="product">
     </div>
     <a href="#" class="btn btn-view">quick view</a>
     <a href="#" class="btn btn-details">more details</a>
  </div>
  <div class="description">
     <h4 class="description__title">Excepteur sint occaecat cupidatat</h4>
     <div class="item__bottom">
        <div class="description__price">
           <span class="new">$ 199.00</span>
        </div>
        <div class="colors">
           <input class="radio-inp" type="radio" name="color" value="red" id="red${i}"><label class="label label--red"
              for="red${i}"></label>
           <input class="radio-inp" type="radio" name="color" value="orange" id="orange${i}"><label class="label label--orange"
              for="orange${i}"></label>
           <input class="radio-inp" type="radio" name="color" value="green" id="green${i}"><label class="label label--green"
              for="green${i}"></label>
           <input class="radio-inp" type="radio" name="color" value="blue" id="blue${i}"><label class="label label--blue"
              for="blue${i}"></label>
        </div>
     </div>
  </div>
  </div>`;

  console.log(item);
}
