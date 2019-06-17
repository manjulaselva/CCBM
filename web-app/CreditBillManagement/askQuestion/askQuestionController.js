/*
* *****************************************************************************
 	Copyright 2019 Harman Connected Services
  *****************************************************************************
* */
angular.module("Sanchaar")
    .controller("askQuestionController", ["$scope", "askQuestionService","questionService", askQuestionController]);
function askQuestionController ($scope,askQuestionService,questionService) {
    $scope.question="";
    $scope.selectedValue="";

    $scope.resetclear=function(){
         $scope.question=(angular.copy(""));
    }
    $scope.askQuestion = function () {
        if($scope.question==""||$scope.question==" ")
            alert("Blank");
        else {
            askQuestionService.putQuestionToDB({
                "question":$scope.question,
                "categoryLabel": $scope.selectedValue
            }).$promise.then(function () {
                $scope.question=null;
                $scope.selectedValue=null;
            });
        }};

    $scope.getCategories = function()
    {
        questionService.getCategories().$promise.then(function (response)
        {
            $scope.category = response.Category
        });
    };
    $scope.getCategories();

}
    



