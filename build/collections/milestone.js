(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.MilestoneCollection = (function(_super) {
    __extends(MilestoneCollection, _super);

    function MilestoneCollection() {
      _ref = MilestoneCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }
    MilestoneCollection.prototype.model = MilestoneModel;
    MilestoneCollection.prototype.url = function() {
      return this._url;
    };
    MilestoneCollection.prototype.initialize = function(options) {
      var r;
      if (r = options.repository) {
        return this.url = "https://api.github.com/repos/" + r + "/milestones";
      }
    };
    return MilestoneCollection;
  })(Backbone.Collection);
}).call(this);
