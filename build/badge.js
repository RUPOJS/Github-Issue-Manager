(function() {
  this.Badge = (function() {
    function Badge() {}

    Badge.prototype.setIssues = function(count) {
      this.count = count;
      return this.render();
    };

    Badge.prototype.addIssues = function(count) {
      this.count += count;
      return this.render();
    };

    Badge.prototype.removeIssues = function(count) {
      this.count -= count;
      return this.render();
    };

    Badge.prototype.setBadgeText = function(text) {
      return chrome.browserAction.setBadgeText({
        text: "" + text
      });
    };

    Badge.prototype.render = function() {
      if (this.count > 0) {
        return this.setBadgeText('' + this.count);
      } else {
        return this.setBadgeText('');
      }
    };

    return Badge;

  })();

}).call(this);
