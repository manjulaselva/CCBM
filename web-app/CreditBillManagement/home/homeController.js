/*
* *****************************************************************************
 	Copyright 2019 Harman Connected Services
  *****************************************************************************
* */


angular.module("Sanchaar")
    .controller("homeController", ["$scope", "questionService","answerSectionService",  homeController]);

function homeController($scope, questionService,answerSectionService) {
    $scope.showMoreLable = "Show More";
    $scope.IsVisible = false;
    $scope.isAvailable = false;
    $scope.questions = [];
    $scope.answers = [];
    $scope.answer="";
    $scope.isDisabled = false;

    $scope.getQuestion = function () {
        questionService.getQuestionOnHome().$promise.then(function (response) {
            response.Questions.forEach(
                (ques) =>
                {
                    var obj =
                        {
                            question: ques,
                            canShowAns: false,
                            answers: []
                        };
                        $scope.questions.push(obj);
                }
            );
        });
    };
    $scope.getQuestion();


    $scope.getAnswer = function (params, index) {

        $scope.questions[index].answers = [];

        $scope.questions[index].canShowAns = !$scope.questions[index].canShowAns;
        questionService.getAnswerOnHome({"questionId": params}).$promise.then(function (response)
        {

            $scope.answers = response.Answer;
            $scope.questions[index].answers.push($scope.answers[0]);

            if($scope.answers.length === 1)
            {
                $scope['isAvailable'+index] = !$scope['isAvailable'+index];
            }
        });



    };
    $scope.showMore = function (index)
    {
        if ($scope.questions[index].answers.length === 1)
        {
            $scope.questions[index].answers = $scope.answers;
        }
        else
        {
            $scope.questions[index].answers = [];
            $scope.questions[index].answers.push($scope.answers[0]);
        }

    };

    $scope.postAnswer = function (answer,questionId, index) {
            answerSectionService.putAnswerToDB({
                "answer": answer,
                "questionId": questionId
            }).$promise.then(function () {
                $scope.getAnswer(questionId , index);
            });
        location.reload();
    };
    $scope.getCategory = function()
    {
        questionService.getCategory().$promise.then(function (response)
        {
            $scope.category = response.Category
        });
    };
    $scope.getCategory();

    $scope.showHide = function(index)
    {
        $scope['IsVisible'+index] = !$scope['IsVisible'+index];
    };

    $scope.disable = function()
    {
        $scope.isDisabled = true;
        return false;
    };

}

