(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.SettingsView = (function(_super) {
    __extends(SettingsView, _super);

    function SettingsView() {
      _ref = SettingsView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    SettingsView.prototype.render = function() {
      this.$el.html('Hai.');
      return this;
    };

    return SettingsView;

  })(Backbone.View);

}).call(this);
