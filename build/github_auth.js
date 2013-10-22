(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.GithubAuth = (function() {
    function GithubAuth() {
      this.authorize = __bind(this.authorize, this);
      this.githubAuth = new OAuth2("github", {
        client_id: "a61d88bc98e28b1c1923",
        client_secret: "aba706c11f6852a38b4c6116de078eae6dfdf852",
        api_scope: "user,repo"
      });
    }

    GithubAuth.prototype.is_logged_in = function() {
      return this.githubAuth.hasAccessToken();
    };

    GithubAuth.prototype.logout = function() {
      return this.githubAuth.clearAccessToken();
    };

    GithubAuth.prototype.authorize = function(callback) {
      var _this = this;
      return this.githubAuth.authorize(function() {
        return callback(_this.githubAuth.getAccessToken());
      });
    };

    return GithubAuth;

  })();

}).call(this);
