(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.IssuesView = (function(_super) {
    __extends(IssuesView, _super);

    function IssuesView() {
      _ref = IssuesView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    IssuesView.prototype.className = 'issue-list';

    IssuesView.prototype.tagName = 'ol';

    IssuesView.prototype.initialize = function(options) {
      this.options = options;
      this.collection = this.options.collection;
      return this.listenTo(this.collection, 'sync', this.render);
    };

    IssuesView.prototype.render = function() {
      this.badge = new Badge();
      this.badge.setIssues(this.collection.size());
      if (this.collection.isEmpty()) {
        this.$el.html('<div class="no-issue">No issues are currently assigned to you.</div>');
      } else {
        this.renderIssues();
        this.$("abbr.timeago").timeago();
      }
      return this;
    };

    IssuesView.prototype.renderIssues = function() {
      var _this = this;
      return this.collection.each(function(model) {
        return _this.renderIssue(model);
      });
    };

    IssuesView.prototype.renderIssue = function(model) {
      var view;
      view = new IssueView({
        model: model
      });
      return this.$el.append(view.render().el);
    };

    return IssuesView;

  })(Backbone.View);

}).call(this);
