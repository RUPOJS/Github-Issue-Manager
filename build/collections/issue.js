(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.IssueCollection = (function(_super) {
    __extends(IssueCollection, _super);

    function IssueCollection() {
      _ref = IssueCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    IssueCollection.prototype.model = IssueModel;

    IssueCollection.prototype.url = "https://api.github.com/issues";

    return IssueCollection;

  })(Backbone.Collection);

}).call(this);
