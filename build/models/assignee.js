(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.AssModel = (function(_super) {
    __extends(AssModel, _super);
    function AssModel() {
      _ref = AssModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }
    return AssModel;
  })(Backbone.Model);
}).call(this);
