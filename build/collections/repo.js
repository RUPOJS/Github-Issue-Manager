(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.RepoCollection = (function(_super) {
    __extends(RepoCollection, _super);

    function RepoCollection() {
      _ref = RepoCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RepoCollection.prototype.model = Repo;

    RepoCollection.prototype.url = function() {
      return this._url;
    };

    RepoCollection.prototype.comparator = function(repo) {
      return -(new Date(repo.get('pushed_at')));
    };

    RepoCollection.prototype.initialize = function(options) {
      if (options == null) {
        options = {};
      }
      this._url = options.url;
      this._url || (this._url = "https://api.github.com/user/repos");
      this._url += "?type=" + options.type + "&sort=" + options.sort_by;
      return this.org = options.org;
    };

    return RepoCollection;

  })(Backbone.Collection);

}).call(this);
