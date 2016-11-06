var app = window.app;

app.controller("home", function ($scope, getJson, $routeParams) {
	"use strict";
	
	$scope.title = "Keller's Fashions";

	$scope.buttons = [{
		name: "Adidas",
		style: "btn-danger-outline",
		link: "#/samples/sampleOne"
	}, {
		name: "Nike",
		style: "btn-success-outline",
		link: "#/samples/sampleOne"
	}, {
		name: "Yeezus",
		style: "btn-warning-outline",
		link: "#/samples/sampleTwo"
	}, {
		name: "Reebok",
		style: "btn-info-outline",
		link: "#/samples/sampleTwo"
	}, {
		name: "Airmax",
		style: "btn-warning-outline",
		link: "#/samples/sampleThree"
	}, {
		name: "Gucci",
		style: "btn-success-outline",
		link: "#/samples/sampleThree"
	}, {
		name: "Wears",
		style: "hidden-sm-down btn-danger-outline",
		link: "#/samples/wears",
		clas: "hidden-sm-down"
	}];
	
	$scope.imgTop = "img-fluid";
	
});

app.controller("samples", function ($scope, getJson, $route, $routeParams) {
	"use strict";
//	window.console.log($route.current.samp);
//	window.console.log($routeParams.sample);
//	window.console.log($route.current.params.sample);
	$scope.buttons = [{
		name: "Adidas",
		style: "btn-danger-outline",
		link: "#/samples/sampleOne"
	}, {
		name: "Nike",
		style: "btn-success-outline",
		link: "#/samples/sampleOne"
	}, {
		name: "Yeezus",
		style: "btn-warning-outline",
		link: "#/samples/sampleTwo"
	}, {
		name: "Reebok",
		style: "btn-info-outline",
		link: "#/samples/sampleTwo"
	}, {
		name: "Airmax",
		style: "btn-warning-outline",
		link: "#/samples/sampleThree"
	}, {
		name: "Gucci",
		style: "btn-success-outline",
		link: "#/samples/sampleThree"
	}, {
		name: "Wears",
		style: "hidden-sm-down btn-danger-outline",
		link: "#/samples/wears",
		clas: "hidden-sm-down"
	}];
	$scope.title = "Keller Fashions";
	var promise = getJson.getSample($route.current.samp);
	promise.then(function (data) {
		$scope.data = data;
		window.console.log($scope.data);
	}, function (status) {
		window.console.log(status);
	});
});