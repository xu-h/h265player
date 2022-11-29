var express = require('express');
var app = express();

app.use(function (req, res, next) {
    // 设置响应头
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");

    // Pass to next layer of middleware
    next();
});
app.use('/', express.static(__dirname));

app.listen({
    port: 8080,
    host: 'localhost'
  }, function () {
  console.log('Example app listening on port 8080!');
});