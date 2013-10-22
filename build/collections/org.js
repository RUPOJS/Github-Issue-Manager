(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.OrgCollection = (function(_super) {
    __extends(OrgCollection, _super);

    function OrgCollection() {
      _ref = OrgCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    OrgCollection.prototype.model = Org;

    OrgCollection.prototype.url = "https://api.github.com/user/orgs";

    return OrgCollection;

  })(Backbone.Collection);

}).call(this);
