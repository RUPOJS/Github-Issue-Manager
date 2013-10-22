(function() {
  chrome.extension.sendRequest({
    message: "requestConfig"
  }, function(response) {
    var app;
    return app = new GithubChrome({
      el: $('#main')
    });
  });

}).call(this);
