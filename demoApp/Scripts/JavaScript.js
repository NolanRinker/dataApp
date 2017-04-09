 /// <reference path="angular.min.js" />

var myApp = angular
    .module("myModule", []) // created a module
    .controller("myController", function ($scope) { //created a controller which is a javascript function
        var cars = [
            { Make: "Dodge Charger", Year: 2011, Price: 15000, pic: "/Images/2011_dodge_charger_angularfront.jpg" },
            { Make: "Ford Mustang", Year: 2012, Price: 18000, pic: "/Images/23532-2012-Ford-Mustang.jpg" },
            { Make: "Chevy Corvette", Year: 2008, Price: 20000, pic: "/Images/68715_corvette-2008.jpg" }
        ];
        $scope.cars = cars;
    });