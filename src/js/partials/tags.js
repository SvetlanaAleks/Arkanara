const Tags = (function() {
  "use strict";
  const filters = $(".js_filters input[type=checkbox]");
  const filterPlace = $(".js_filters-place");
  const btnReset = $(".js_btn-reset");
  return {
    filtersChangeEvent: function() {
      const _this = this;

      filters.on("change", function() {
        let checkedEl = [];
        for (let i = 0; i < filters.length; i++) {
          const filter = $(filters[i]);

          if (filter.prop("checked")) {
            const label = filter.data("title");
            checkedEl.push(label);
          }
        }

        const html = _this.getTagsList(checkedEl);
        filterPlace.html(html);
      });
    },
    getTagsList: function(tags) {
      let tag = "";
      for (let i = 0; i < tags.length; i++) {
        const element = tags[i];
        tag += `<span class="tag">${element} <i class="fico fico-close"></i> </span>`;
      }
      return tag;
    },
    resetEvent: function() {
      btnReset.click(function() {
        $(this)
          .parents("form")
          .trigger("reset");

        filters.trigger("change");
      });
    },
    init: function() {
      this.filtersChangeEvent();
      this.resetEvent();
    }
  };
})();
