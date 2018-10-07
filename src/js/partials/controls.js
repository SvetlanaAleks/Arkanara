const Controls = (function() {
  "use strict";
  return {
    dropDownEvents: function() {
      $(document).on("click", ".js_dropdown", function(e) {
        e.stopPropagation();
        const _this = $(this);
        const list = _this.find(".js_dropdown-list");
        _this.toggleClass("dropdown--active");
        list.slideToggle();
        console.log(list);
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
    }
  };
})();
Controls.init();
