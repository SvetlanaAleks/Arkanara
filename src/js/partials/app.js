const App = (function() {
  "use strict";
  const callBtns = $(".js_call-btn");
  const hiddenBlocks = $(".js_hidden-block");
  const tabLinks = $(".js_tab-link");
  const menuList = $(".js_menu-list");
  let isSlider = false;
  let isMobile = false;
  return {
    hiddenBlocksEvents: function() {
      callBtns.click(function(e) {
        e.preventDefault();
        //Зупинити вспливання події
        e.stopPropagation();
        //   Знайти найближчий блок по селектору
        $(".js_burger").trigger("menuHide");
        const target = $(this).siblings(".js_hidden-block");
        target.toggleClass("is-active");
        hiddenBlocks.not(target).removeClass("is-active");
      });

      $(document).click(function(e) {
        hiddenBlocks.removeClass("is-active");
      });

      hiddenBlocks.click(function(e) {
        e.stopPropagation();

        const target = $(e.target);
        if (target.hasClass("js_close")) {
          $(this).removeClass("is-active");
        }
      });
    },
    initSlider: function(selector) {
      // slider init
      $(selector).slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        prevArrow:
          '<div class="arr arr--left"><i class="fico fico-arr-left"></i></div>',
        nextArrow:
          '<div class="arr arr--right"><i class="fico fico-arr-right"></i></div>',
        dotsClass: "container slick-dots slick-dots--header",
        autoplay: true
      });
    },
    initSliderMobile: function(selector) {
      // slider init
      $(selector).slick({
        dots: true,
        infinite: true,
        speed: 500,
        prevArrow: '<i class="fico fico-arr-left"></i>',
        nextArrow: '<i class="fico fico-arr-right"></i>',
        autoplay: true
      });
      isSlider = true;
    },
    tabEvents: function() {
      tabLinks.click(function(e) {
        e.preventDefault();
        const $this = $(this);
        const menuTab = $this.parents(".trending__tabs");
        const menuItems = menuTab.find(".list");
        const parent = $this.parents(".list");

        menuItems.removeClass("list--active");
        parent.addClass("list--active");

        const target = $this.attr("href");
        const targetTab = $(target);

        menuList.removeClass("trending__list--active");
        targetTab.addClass("trending__list--active");
      });
    },
    isMobileScreen: function() {
      const screenWidth = $(window).outerWidth();
      return screenWidth < 768 ? true : false;
    },
    resizeEvent: function() {
      $(window).resize(() => {
        isMobile = this.isMobileScreen();
        this.rebuildLayout();
      });
    },
    rebuildLayout: function() {
      if (isMobile) {
        if (!isSlider) {
          this.initSliderMobile(".advantages__list");
          this.initSliderMobile(".themeblock__list");
          this.initSliderMobile(".js_plates-slider");
        }
      } else {
        if (isSlider) {
          $(".advantages__list").slick("unslick");
          $(".themeblock__list").slick("unslick");
          $(".js_plates-slider").slick("unslick");
          isSlider = false;
        }
      }
    },
    init: function() {
      this.hiddenBlocksEvents();
      this.initSlider(".slider");
      this.tabEvents();
      isMobile = this.isMobileScreen();
      this.resizeEvent();
      this.rebuildLayout();
      Controls.init();
      Tags.init();
    }
  };
})();
