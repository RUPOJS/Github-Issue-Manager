(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.RepoView = (function(_super) {
    __extends(RepoView, _super);

    function RepoView() {
      this.renderPullRequests = __bind(this.renderPullRequests, this);
      _ref = RepoView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RepoView.prototype.className = 'repo';

    RepoView.prototype.tagName = 'li';

    RepoView.prototype.render = function() {
      this.$el.html(HAML['repo']({
        model: this.model
      }));
      return this;
    };

    RepoView.prototype.renderPullRequests = function() {
      var pull_requests,
        _this = this;
      pull_requests = this.model.pullRequests();
      return pull_requests.fetch({
        success: function(collection) {
          return _this.$('.pull-requests-count').text(collection.length);
        }
      });
    };

    return RepoView;

  })(Backbone.View);

}).call(this);
