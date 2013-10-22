(function() {
  this.Notice = (function() {
    function Notice() {}

    Notice.prototype.create = function(title, body) {
      var n;
      n = webkitNotifications.createNotification("/assets/notification_icon_48.png", title, body);
      n.show();
      return n;
    };

    return Notice;

  })();

}).call(this);
