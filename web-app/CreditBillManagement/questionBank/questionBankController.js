/*
* *****************************************************************************
 	Copyright 2019 Harman Connected Services
  *****************************************************************************
* */
angular.module("Sanchaar")
    .controller("questionBankController", ["$scope", "questionBankService","answerSectionService",  questionBankController]);

function questionBankController($scope, questionService,answerSectionService) {
    $scope.showMoreLable = "Show More";
    $scope.IsVisible = false;
    $scope.selectCategory = {};
    $scope.selectCategory.category= 'All Questions';
    $scope.questions = [];
    $scope.answers = [];
    $scope.isDisabled = false;
    $scope.answer="";
    $scope.isAvailable = false;


    $scope.getCategoryId =  function(response)
    {
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
    };


    $scope.getQuestion = function () {
        $scope.selectCategory.category= 'All Questions';
        $scope.questions = [];
        questionService.getQuestionOnHome().$promise.then(function (response) {
            /*response.Questions.forEach(
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
            );*/
            $scope.getCategoryId(response);
        });
    };
    $scope.getQuestion();

    $scope.getQuestionsByCategory = function (params, categoryName)
    {
        $scope.selectCategory.category=categoryName;
        questionService.getCategoryQuestionBank({"categoryId":params}).$promise.then(function (response)
        {
            $scope.questions = [];
            $scope.getCategoryId(response)
        })
    };


    $scope.getAnswer = function (params, index) {
        $scope.questions[index].answers = [];
        $scope.questions[index].canShowAns = !$scope.questions[index].canShowAns;

        questionService.getAnswerOnHome({"questionId": params}).$promise.then(function (response)
        {
            $scope.answers = response.Answer;
            $scope.questions[index].answers.push($scope.answers[0]);
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
    $scope.getCategory = function()
    {
        questionService.getCategory().$promise.then(function (response)
        {
            $scope.category = response.Category
        });
    };
    $scope.getCategory();


    $scope.postAnswer = function (answer,questionId, index) {
        answerSectionService.putAnswerToDB({
            "answer": answer,
            "questionId": questionId
        }).$promise.then(function () {
            $scope.getAnswer(questionId , index);
        });
        location.reload();
    };

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