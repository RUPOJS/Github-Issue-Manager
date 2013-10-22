(function() {
  var check_auth, keys, restore_options, save_options;

  keys = ['repo_type', 'repo_sortby'];

  save_options = function() {
    var status;
    _.each(keys, function(key) {
      var select;
      select = document.getElementById(key);
      return localStorage[key] = select.children[select.selectedIndex].value;
    });
    status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    return setTimeout((function() {
      return status.innerHTML = "";
    }), 750);
  };

  restore_options = function() {
    return _.each(keys, function(key) {
      var child, i, select, setting_value, _results;
      setting_value = localStorage[key];
      if (!setting_value) {
        return;
      }
      select = document.getElementById(key);
      i = 0;
      _results = [];
      while (i < select.children.length) {
        child = select.children[i];
        if (child.value === setting_value) {
          child.selected = "true";
          break;
        }
        _results.push(i++);
      }
      return _results;
    });
  };

  check_auth = function() {
    var gh, token;
    gh = new GithubAuth();
    if (gh.is_logged_in() != null) {
      token = gh.authorize();
      $('#authorzied').html("You are authorized with OAuth2.");
      return $('#gh-logout').show().click(function() {
        gh.logout();
        if (gh.is_logged_in() != null) {
          return $('#gh-logout').hide();
        } else {
          return $('#gh-logout').html("Failed.");
        }
      });
    } else {
      return $('#authorzied').html('Login here').click(function() {
        return gh.authorize();
      });
    }
  };

  document.addEventListener("DOMContentLoaded", restore_options);

  document.addEventListener("DOMContentLoaded", check_auth);

  document.querySelector("#save").addEventListener("click", save_options);

}).call(this);
