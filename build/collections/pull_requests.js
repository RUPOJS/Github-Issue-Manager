(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.PullRequestsCollection = (function(_super) {
    __extends(PullRequestsCollection, _super);

    function PullRequestsCollection() {
      _ref = PullRequestsCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    PullRequestsCollection.prototype.initialize = function(repo) {
      return this.repo = repo;
    };

    PullRequestsCollection.prototype.model = PullRequest;

    PullRequestsCollection.prototype.url = function() {
      return ['https://api.github.com/repos', this.repo.get('full_name'), "pulls"].join("/");
    };

    return PullRequestsCollection;

  })(Backbone.Collection);

}).call(this);
