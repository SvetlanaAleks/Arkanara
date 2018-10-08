const Controls = (function() {
  "use strict";
  return {
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
    }
  };
})();
Controls.init();
