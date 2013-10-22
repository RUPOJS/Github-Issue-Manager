(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.NavView = (function(_super) {
    __extends(NavView, _super);

    function NavView() {
      _ref = NavView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    NavView.prototype.tagName = 'ul';

    NavView.prototype.className = 'nav';

    NavView.prototype.events = {
      "click li": "switchSection"
    };

    NavView.prototype.render = function() {
      this.$el.html(HAML['nav']());
      return this;
    };

    NavView.prototype.switchSection = function(e) {
      var section;
      section = $(e.currentTarget).attr('class');
      return this.trigger('change:section', section);
    };

    NavView.prototype.highlight = function(section) {
      this.$('li.highlight').removeClass('highlight');
      return this.$("li." + section).addClass('highlight');
    };

    return NavView;

  })(Backbone.View);

}).call(this);
