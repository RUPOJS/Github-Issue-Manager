(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.MilestoneModel = (function(_super) {
    __extends(MilestoneModel, _super);

    function MilestoneModel() {
      _ref = MilestoneModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }
    return MilestoneModel;
  })(Backbone.Model);
}).call(this);
