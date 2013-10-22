(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.ReposView = (function(_super) {
    __extends(ReposView, _super);

    function ReposView() {
      this.render = __bind(this.render, this);
      _ref = ReposView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ReposView.prototype.className = 'repo-list';

    ReposView.prototype.tagName = 'ol';

    ReposView.prototype.initialize = function(options) {
      var _this = this;
      this.options = options;
      this.repoViews = [];
      this.collection = this.options.collection;
      this.listenTo(this.collection, 'add reset sync', this.render);
      return this.listenTo(this.collection, 'all-done', function() {
        var v, _i, _len, _ref1, _results;
        _ref1 = _this.repoViews;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          v = _ref1[_i];
          _results.push(v.renderPullRequests());
        }
        return _results;
      });
    };

    ReposView.prototype.render = function() {
      this.$el.html('');
      this.repoViews = [];
      this.renderRepos();
      this.$("abbr.timeago").timeago();
      return this;
    };

    ReposView.prototype.renderRepos = function() {
      var _this = this;
      return this.collection.each(function(model) {
        return _this.renderRepo(model);
      });
    };

    ReposView.prototype.renderRepo = function(repo) {
      var view;
      view = new RepoView({
        model: repo
      });
      this.repoViews.push(view);
      return this.$el.append(view.render().el);
    };

    return ReposView;

  })(Backbone.View);

}).call(this);
