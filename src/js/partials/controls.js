const Controls = (function() {
  "use strict";
  const burgerBtn = $(".js_burger");
  return {
    burgerEvent: function() {
      burgerBtn.click(function() {
        const _this = $(this);
        _this.toggleClass("burger--active");
        _this.siblings(".nav__menu").toggleClass("nav__menu--active");
      });
      burgerBtn.on("menuHide", function() {
        const _this = $(this);
        _this.removeClass("burger--active");
        _this.siblings(".nav__menu").removeClass("nav__menu--active");
      });
    },
    asideFiltersEvents: function() {
      $(document).on("click", ".js_list-trigger", function() {
        const _this = $(this);
        const list = _this.siblings(".js_list");
        _this.toggleClass("title-wrap--active");
        list.slideToggle();
      });
    },
    dropDownEvents: function() {
      $(document).on("click", ".js_dropdown", function(e) {
        e.stopPropagation();
        const _this = $(this);
        const list = _this.find(".js_dropdown-list");
        _this.toggleClass("dropdown--active");
        list.slideToggle();
      });
    },
    globalEvents: function() {
      $(document).click(function() {
        $(".js_dropdown-list").slideUp();
      });
    },
    init: function() {
      this.dropDownEvents();
      this.globalEvents();
      this.asideFiltersEvents();
      this.burgerEvent();
    }
  };
})();
