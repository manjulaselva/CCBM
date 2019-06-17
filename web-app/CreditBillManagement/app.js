/*
* *****************************************************************************
 	Copyright 2019 Harman Connected Services
  *****************************************************************************
* */
(function(angular) {
    'use strict';
    var Sanchaar = angular.module('Sanchaar', ['ui.router', 'ngResource']);

    Sanchaar.config(
        ["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "Sanchaar/home/partial-home.html"
                })
                .state("askQuestion", {
                    url: "/askQuestion",
                    templateUrl: "Sanchaar/askQuestion/askQuestion.html",
                    controller: "askQuestionController"
                })
                .state("questionBank", {
                    url: "/questionBank",
                    templateUrl: "Sanchaar/questionBank/questionBank.html",
                    controller: "questionBankController"
                })
                .state("userQuestion", {
                url: "/userQuestion",
                templateUrl: "Sanchaar/userQuestion/userQuestion.html",
                controller: "userQuestionController"
                })
                .state("userProfile", {
                    controller: "userProfileController"
                })
                .state("feedback", {
                    url:"/feedback",
                    templateUrl: "Sanchaar/feedback/feedback.html",
                    controller: "feedbackController"
                })

        }]
    )
        .directive("menuDirective", function ()
    {
        return{
            restrict: "E",
            templateUrl: "Sanchaar/menuBar/index.html"
        }
    });

})(window.angular);


