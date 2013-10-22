(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.IssueModel = (function(_super) {
    __extends(IssueModel, _super);

    function IssueModel() {
      _ref = IssueModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    IssueModel.prototype.initialize = function(attrs, options) {
      var r;
      if (r = options.repository) {
        return this.url = "https://api.github.com/repos/" + (r.get('full_name')) + "/issues";
      }
    };

    return IssueModel;

  })(Backbone.Model);

}).call(this);
