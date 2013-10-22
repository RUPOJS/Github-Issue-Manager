(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.NewIssueView = (function(_super) {
    __extends(NewIssueView, _super);

    function NewIssueView() {
      _ref = NewIssueView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    NewIssueView.prototype.className = 'new-issue';

    NewIssueView.prototype.events = {
      "change select": "detectChange",
      "submit form": "onSubmit"
    };

    NewIssueView.prototype.initialize = function(options) {
      this.options = options;
      return this.repositories = this.options.repositories;
    };

    NewIssueView.prototype.render = function() {
      this.$el.html(HAML['new_issue']({
        repositories: this.repositories
      }));
      return this.$('select').select2();
    };


    NewIssueView.prototype.detectChange = function() {
      var name,
        _this = this;
      name = this.$("[name=repository]").val();
      this.assignees = new AssCollection({
        repository: name
      });
      this.assignees.fetch({
        success: function() {
          return _this.insertData('assignee');
        }
      });
      this.milestones = new MilestoneCollection({
        repository: name
      });
      return this.milestones.fetch({
        success: function() {
          return _this.insertData('milestone');
        }
      });
    };
    
    NewIssueView.prototype.insertData = function(option) {
      var assignee, milestone, _i, _j, _len, _len1, _ref1, _ref2;
      switch (option) {
        case 'assignee':
          this.$("[name=assignee]").empty();
          _ref1 = this.assignees.models;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            assignee = _ref1[_i];
            this.$("[name=assignee]").append("<option value=" + (assignee.get('login')) + ">" + (assignee.get('login')) + "</option>");
          }
          return this.$('select').select2();
        case 'milestone':
          this.$("[name=milestone]").empty();
          _ref2 = this.milestones.models;
          for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            milestone = _ref2[_j];
            this.$("[name=milestone]").html("<option value=" + (milestone.get('title')) + ">" + (milestone.get('title')) + "</option>");
          }
          return this.$('select').select2();
      }
    };
    
    NewIssueView.prototype.onSubmit = function(e) {
      var model, name, repository,
        _this = this;
      e.preventDefault();
      name = this.$("[name=repository]").val();
      localStorage['new_issue_last_repo'] = name;
      repository = this.repositories.find(function(r) {
        return r.get('full_name') === name;
      });
      model = new IssueModel({
        body: this.$("[name=body]").val(),
        title: this.$("[name=title]").val(),
        assignee: this.$("[name=assignee]").val(),
        milestone: this.$("[name=milestone]").val()
      }, {
        repository: repository
      });
      return model.save({}, {
        success: function(model) {
          _this.badge = new Badge();
          _this.badge.addIssues(1);
          return _this.$('.message').html("<span>Issue <a href=\"" + (model.get("html_url")) + "\" target=\"_blank\">#" + (model.get('number')) + "</a> was created!</span>");
        },
        error: function() {
          return _this.$('.message').html("<span>Failed to create issue :(</span>");
        }
      });
    };
    
    return NewIssueView;

  })(Backbone.View);

}).call(this);
