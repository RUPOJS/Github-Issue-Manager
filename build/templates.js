(function() {
  if (window.HAML == null) {
    window.HAML = {};
  }

  window.HAML['issue'] = function(context) {
    return (function() {
      var $c, $e, $o;
      $e = function(text, escape) {
        return ("" + text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/\//g, '&#47;').replace(/"/g, '&quot;');
      };
      $c = function(text) {
        switch (text) {
          case null:
          case void 0:
            return '';
          case true:
          case false:
            return '' + text;
          default:
            return text;
        }
      };
      $o = [];
      $o.push("<a href='" + ($c(this.model.get('html_url'))) + "' target='_blank' title='Open this issue on Github'>");
      $o.push("  " + $e($c(this.model.get('title'))));
      $o.push("  <div class='repo-name'>" + ($e($c(this.model.get('repository').name))) + "</div>\n  <abbr class='timeago' title='" + ($c(this.model.get("created_at"))) + "'>");
      $o.push("    " + $e($c(this.model.get("created_at"))));
      $o.push("  </abbr>\n</a>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(context);
  };

}).call(this);
(function() {
  if (window.HAML == null) {
    window.HAML = {};
  }

  window.HAML['nav'] = function(context) {
    return (function() {
      var $o;
      $o = [];
      $o.push("<ul class='nav'>\n  <li class='repos'>\n    <span class='octicon octicon-repo'></span>\n    Repos\n  </li>\n  <li class='issues'>\n    <span class='octicon octicon-issue-opened'></span>\n    My Issues\n  </li>\n  <li class='new-issue'>\n    <span class='octicon octicon-plus'></span>\n    New Issue\n  </li>\n</ul>");
      return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(context);
  };

}).call(this);
(function() {
  if (window.HAML == null) {
    window.HAML = {};
  }

  window.HAML['new_issue'] = function(context) {
    return (function() {
      var $c, $e, $o, full_name, repository, _i, _len, _ref;
      $e = function(text, escape) {
        return ("" + text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/\//g, '&#47;').replace(/"/g, '&quot;');
      };
      $c = function(text) {
        switch (text) {
          case null:
          case void 0:
            return '';
          case true:
          case false:
            return '' + text;
          default:
            return text;
        }
      };
      $o = [];
      $o.push("<div class='message'></div>\n<form>\n  <section class='repo-select'>\n    <select name='repository'>");
      _ref = this.repositories.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        repository = _ref[_i];
        full_name = repository.get('full_name');
        if (localStorage['new_issue_last_repo'] === repository.get('full_name')) {
          $o.push("      <option value='" + ($c(full_name)) + "' selected='selected'>" + ($e($c(repository.get('full_name')))) + "</option>");
        } else {
          $o.push("      <option value='" + ($c(full_name)) + "'>" + ($e($c(repository.get('full_name')))) + "</option>");
        }
      }
      $o.push("    </select>\n  </section>\n  <section>\n    <label for='title'>Title:</label>\n    <input name='title' type='text' value=''>\n  </section>\n  <section>\n    <label for='assignee'>Assignee:</label>\n    <select name='assignee'></select>\n  </section>\n  <section>\n    <label for='milestone'>Milestone:</label>\n    <select name='milestone'></select>\n  </section>\n  <section>\n    <label for='body'>Comment:</label>\n    <textarea name='body' value=''></textarea>\n  </section>\n  <section>\n    <input class='submit' type='submit' value='Create Issue'>\n  </section>\n</form>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(context);
  };

}).call(this);
(function() {
  if (window.HAML == null) {
    window.HAML = {};
  }

  window.HAML['repo'] = function(context) {
    return (function() {
      var $c, $e, $o;
      $e = function(text, escape) {
        return ("" + text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/\//g, '&#47;').replace(/"/g, '&quot;');
      };
      $c = function(text) {
        switch (text) {
          case null:
          case void 0:
            return '';
          case true:
          case false:
            return '' + text;
          default:
            return text;
        }
      };
      $o = [];
      $o.push("<div class='title'>\n  <a href='" + ($c(this.model.get("html_url"))) + "' target='_blank'>");
      $o.push("    " + $e($c(this.model.get('full_name'))));
      $o.push("  </a>\n</div>\n<ul class='meta'>\n  <li class='issues'>\n    <a href='" + ($c(this.model.issuesUrl())) + "' title='" + ($c(this.model.get('open_issues'))) + " open issues' target='_blank'>\n      <span class='octicon octicon-issue-opened'></span>");
      $o.push("      " + $e($c(this.model.get('open_issues'))));
      $o.push("    </a>\n  </li>\n  <li class='prs'>\n    <a href='" + ($c(this.model.pullRequestsUrl())) + "' title='Pull Requests' target='_blank'>\n      <span class='octicon octicon-git-pull-request'></span>\n      <span class='pull-requests-count'>? </span>\n      PRs\n    </a>\n  </li>\n  <li class='updated'>\n    <a href='" + ($c(this.model.commitsUrl())) + "' title='Last Updated' target='_blank'>\n      <span class='octicon octicon-history'></span>\n      <abbr class='timeago' title='" + ($c(this.model.get("pushed_at"))) + "'>");
      $o.push("        " + $e($c(this.model.get("pushed_at"))));
      $o.push("      </abbr>\n    </a>\n  </li>\n</ul>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '').replace(/\s(?:id|class)=(['"])(\1)/mg, "");
    }).call(context);
  };

}).call(this);
