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
        tag += `<span class="tag" data-key="${element}">${element} <i class="fico fico-close js_tag-remove"></i> </span>`;
      }
      return tag;
    },
    resetEvent: function() {
      btnReset.click(function() {
        $(this)
          .parents("form")
          .trigger("reset");
        // console.log($(this).parents("form"));
        // filters.prop("checked", false);
        filters.trigger("change");
      });
    },
    removeTagEvent: function() {
      $(document).on("click", ".js_tag-remove", function() {
        const _this = $(this);
        const tag = _this.parent(".tag");
        const key = tag.data("key");
        tag.remove();

        $(`[data-title="${key}"]`).prop("checked", false);
      });
    },
    init: function() {
      this.filtersChangeEvent();
      this.resetEvent();
      this.removeTagEvent();
      filters.trigger("change");
    }
  };
})();
