/*global describe:true, it:true, before:true, after:true */
"use strict";

var assert = require('assert'),
	nemoFactory = require('../index');
//(new NemoFactory.factory());
before(function(done) {
	process.argv.push("lowercase");
	process.argv.push("filename");
	process.argv.push("filename2");
	process.argv.push("--TARGET_BROWSER");
	process.argv.push("firefox");
	process.argv.push("--TARGET_SERVER");
	process.argv.push("http://127.0.0.1:4444/wd/hub");
	process.argv.push("--TARGET_BASE_URL");
	process.argv.push("http://www.google.com");
	process.argv.push("--SELENIUM_JAR");
	process.argv.push("/usr/bin/selenium-server-standalone.jar");
	process.argv.push("--NO_VALUE");
	process.argv.push("--STAGE_USER_NAME");
	process.argv.push("medelman");
	process.argv.push("--PRIVATE_KEY");
	process.argv.push("/Users/medelman/.ssh/id_dsa");
	process.argv.push("--STAGE");
	process.argv.push("STAGE2MD052");
	process.argv.push("--SERVER_PROPS");
	process.argv.push('{"port": 4444}');
	done();
});
describe('@nemoFactory@', function() {
	//var nemo;
	nemoFactory({context: global});
	it('should create a global nemo object', function(done) {
		assert(nemo && nemo.driver && nemo.wd, "There was some problem getting a global nemo object");
		done();
	});

});

describe('@nemoFactory@', function() {
	var s = {};
	nemoFactory({context: s});
	it('should create a scoped nemo object', function(done) {
		assert(s.nemo && s.nemo.driver && s.nemo.wd, "There was some problem getting a global nemo object");
		done();
	});

});
//TODO: write one or more tests to make sure plugins and setup config are being taken correctly