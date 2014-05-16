/*global nemo:true, before:true, after:true */
'use strict';
var Nemo = require('nemo'),
	_ = require("lodash"),
	_nemo;

module.exports = function (config) {
	config = config || {};
	var context = config.context || global;

	before(function (done) {
		(new Nemo(config.plugins || null)).setup(config.setup || {}).
			then(function (result) {
				if (context === global) {
					context.nemo = result;
					_nemo = context.nemo;
				}
				else {
					_.merge(context, result);
					_nemo = context;
				}
				done();
			}, function (err) {
				done(err);
			});
	});

	after(function (done) {
		_nemo.driver.quit().then(function () {
			done();
		});
	});
};