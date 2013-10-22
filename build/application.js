(function() {
  var auth, sync, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  auth = new GithubAuth();

  sync = Backbone.sync;

  Backbone.sync = function(method, model, options) {
    return auth.authorize(function(token) {
      options.headers = {
        'Authorization': "token " + token
      };
      return sync(method, model, options);
    });
  };

  this.GithubChrome = (function(_super) {
    __extends(GithubChrome, _super);

    function GithubChrome() {
      _ref = GithubChrome.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    GithubChrome.prototype.initialize = function(options) {
      var _this = this;
      this.options = options;
      this.repositories = new RepoCollection;
      this.render();
      this.storage = chrome.storage.local;
      this.update_badge_count();
      chrome.alarms.create('fetch', {
        periodInMinutes: 1.0
      });
      chrome.alarms.onAlarm.addListener(function() {
        return _this.update_badge_count();
      });
      this.user = new User;
      return this.user.fetch({
        success: function() {
          return _this.renderSection('repos');
        },
        error: function() {
          return _this.renderErrors;
        }
      });
    };

    GithubChrome.prototype.update_badge_count = function() {
      var issues,
        _this = this;
      issues = new IssueCollection;
      return issues.fetch({
        success: function(collection) {
          _this.badge = new Badge();
          return _this.badge.setIssues(collection.size());
        }
      });
    };

    GithubChrome.prototype.render = function() {
      this.renderNav();
      return this;
    };

    GithubChrome.prototype.renderNav = function() {
      this.navView = new NavView;
      this.listenTo(this.navView, 'change:section', this.renderSection);
      return $('body').append(this.navView.render().el);
    };

    GithubChrome.prototype.renderSection = function(section) {
      var _this = this;
      this.navView.highlight(section);
      switch (section) {
        case 'repos':
          this.repositories.set([]);
          this.reposView = new ReposView({
            collection: this.repositories
          });
          this.$el.html(this.reposView.render().el);
          this.repositories.fetch({
            reset: true,
            error: this.renderErrors
          });
          this.orgs = new OrgCollection;
          return this.orgs.fetch({
            success: function(orgs) {
              var collection, org, todo, url, _i, _len, _ref1, _results;
              todo = orgs.models;
              _ref1 = _this.orgs.models;
              _results = [];
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                org = _ref1[_i];
                url = org.get('repos_url');
                collection = new RepoCollection({
                  url: url,
                  type: localStorage['repo_type'] || 'member',
                  sort_by: localStorage['repo_sortby'] || 'pushed',
                  sort_order: localStorage['repo_order'] || 'desc',
                  org: org
                });
                _results.push(collection.fetch({
                  success: function(coll) {
                    org = coll.org;
                    todo.splice(todo.indexOf(org), 1);
                    _this.reposView.collection.add(coll.models, {
                      silent: true
                    });
                    _this.reposView.collection.trigger('add');
                    if (todo.length === 0) {
                      return _this.reposView.collection.trigger("all-done");
                    }
                  }
                }));
              }
              return _results;
            }
          });
        case 'issues':
          this.issuesCollection = new IssueCollection;
          this.issuesView = new IssuesView({
            collection: this.issuesCollection
          });
          this.$el.html(this.issuesView.el);
          return this.issuesView.collection.fetch({
            success: function(c) {
              return _this.badge.setBadgeText(c.length);
            },
            error: this.renderErrors
          });
        case 'new-issue':
          this.newIssueView = new NewIssueView({
            repositories: this.repositories
          });
          this.$el.html(this.newIssueView.el);
          return this.newIssueView.render();
        case 'settings':
          this.settingsView = new SettingsView;
          return this.$el.html(this.settingsView.render().el);
      }
    };

    GithubChrome.prototype.renderErrors = function() {
      return this.$el.html("Oops. Something when wrong. Please try again.");
    };

    return GithubChrome;

  })(Backbone.View);

}).call(this);
