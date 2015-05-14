var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? 8080 : 3000;
var publicPath = path.resolve(__dirname, 'public');
var buildPath = path.resolve(__dirname, 'dist');

app.use(express.static(publicPath));

// We either use the built version in production or run our development server
if (isProduction) {
  app.use('/build', express.static(buildPath));
} else {

  // Runs the build
  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });

  proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
  });

}

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
