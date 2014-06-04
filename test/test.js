/*global describe:true, it:true, before:true, after:true */
"use strict";

var assert = require('assert'),
	nemoFactory = require('../index');
//(new NemoFactory.factory());
before(function(done) {
	console.log("doing before");
	process.env.nemoData = JSON.stringify({
		"autoBaseDir": process.cwd() + "/test",
		"targetBrowser": "phantomjs",
		//"targetServer": "http://127.0.0.1:4444/wd/hub",
		"targetBaseUrl": "https://www.paypal.com",
		//"seleniumJar": "/usr/bin/selenium-server-standalone.jar",
		//"serverProps":  {"port": 4444},
		"locale": "FR"
	});
	console.log(process.env.nemoData);
	done();
});
describe('@nemoFactory@', function() {
	//var nemo;
	nemoFactory({context: global, setup: {}});
	it('should create a global nemo object', function(done) {
		assert(nemo && nemo.driver && nemo.wd, "There was some problem getting a global nemo object");
		done();
	});

});

describe('@nemoFactory@', function() {
	var s = {};
	nemoFactory({context: s});
	it('should create a scoped nemo object', function(done) {
		assert(s && s.driver && s.wd, "There was some problem getting a global nemo object");
		done();
	});

});
//TODO: write one or more tests to make sure plugins and setup config are being taken correctly