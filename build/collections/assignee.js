(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.AssCollection = (function(_super) {
    __extends(AssCollection, _super);

    function AssCollection() {
      _ref = AssCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }
    AssCollection.prototype.model = AssModel;
    AssCollection.prototype.url = function() {
      return this._url;
    };
    AssCollection.prototype.initialize = function(options) {
      var r;
      if (r = options.repository) {
        return this.url = "https://api.github.com/repos/" + r + "/assignees";
      }
    };
    return AssCollection;
  })(Backbone.Collection);
}).call(this);
