var angular = window.angular,
	$ = window.jQuery,
	app = angular.module("app", ["ngAnimate", "ngRoute", "ngResource"]);

$.size(function (s) {
	"use strict";
	if (s === "xs") {
		$("header button.btn").addClass("bg-warning");
	} else {
		$("header button.btn").removeClass("bg-warning");
//		$.scrolled(function (val) {
//			if (val > 10) {
//				$("header").css({
//					position: "fixed",
//					top: 0
//				});
//			} else {
//				$("header").css({
//					position: "static"
//				});
//			}
//		});
	}
});

app.config(function ($routeProvider) {
	"use strict";
	$routeProvider
		.when("/", {
			templateUrl: "/home",
			controller: "home"
		}).when("/samples/sampleOne", {
			samp: "sampleOne",
			templateUrl: "/samples/sampleOne",
			controller: "samples"
		}).when("/samples/sampleTwo", {
			samp: "sampleTwo",
			templateUrl: "/samples/sampleTwo",
			controller: "samples"
		}).when("/samples/wears", {
			samp: "wears",
			templateUrl: "/samples/wears",
			controller: "samples"
		}).when("/samples/sampleThree", {
			samp: "sampleThree",
			templateUrl: "/samples/sampleThree",
			controller: "samples"
		});
});

app.factory("getJson", function ($resource, $q) {
	"use strict";
	
	return {
		getSample: function (id) {
			
			var deferred = $q.defer();
			
			$resource("/json/:id", {id: "@id"}).get({id: id}, function (data) {
				deferred.resolve(data);
			}, function (status) {
				deferred.reject(status);
			});
			
			return deferred.promise;
		}
	};
	
});

