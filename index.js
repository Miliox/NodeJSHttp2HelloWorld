/*
 * index.js
 * Copyright (C) 2015 Emiliano Firmino <emiliano.firmino@gmail.com>
 *
 * Distributed under terms of the MIT license.
 *
 * Test Sample from: https://bjartes.wordpress.com/2015/02/19/creating-a-http2-server-with-node-js/
 */

var https = require('http2');
var fs = require('fs');

var options = {
    key : fs.readFileSync('./localhost.key'),
    cert : fs.readFileSync('./localhost.crt')
};

require('http2').createServer(options, function(request, response) {
  response.end('Hello world! From HTTP2.');
}).listen(8080);
