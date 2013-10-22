(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.IssueView = (function(_super) {
    __extends(IssueView, _super);

    function IssueView() {
      _ref = IssueView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    IssueView.prototype.className = 'issue';

    IssueView.prototype.tagName = 'li';

    IssueView.prototype.initialize = function(options) {
      this.options = options;
      return this.model = this.options.model;
    };

    IssueView.prototype.render = function() {
      this.$el.html(HAML['issue']({
        model: this.model
      }));
      return this;
    };

    return IssueView;

  })(Backbone.View);

}).call(this);
