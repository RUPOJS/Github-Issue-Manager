(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Repo = (function(_super) {
    __extends(Repo, _super);

    function Repo() {
      _ref = Repo.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Repo.prototype.issuesUrl = function() {
      return [this.get("html_url"), "issues"].join("/");
    };

    Repo.prototype.pullRequestsUrl = function() {
      return [this.get("html_url"), "pulls"].join("/");
    };

    Repo.prototype.commitsUrl = function() {
      return [this.get("html_url"), "commits"].join("/");
    };

    Repo.prototype.pullRequests = function() {
      return new PullRequestsCollection(this);
    };

    return Repo;

  })(Backbone.Model);

}).call(this);
