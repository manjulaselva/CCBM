/*
* *****************************************************************************
 	Copyright 2019 Harman Connected Services
  *****************************************************************************
* */
angular.module("Sanchaar")
    .service("questionBankService", ['$q', '$resource', questionBankService]);
function questionBankService($q, $resources)
{
    var getQuestionOnHome = $resources(':controller/:action', {
            controller: 'ListQuestions',
            action: 'listAllQuestion'
        },
        {
            query: {
                method: 'GET'
            }
        });
    this.getQuestionOnHome = function () {
        return getQuestionOnHome.query();
    };

    var getAnswerOnHome = $resources(':controller/:action', {
            controller: 'ListAnswer',
            action: 'listAllAnswer'
        },
        {
            query: {
                method: 'GET'
            }
        });
    this.getAnswerOnHome = function (obj) {
        return getAnswerOnHome.query(obj);
    };

    var listCategories = $resources(':controller/:action',{
        controller: 'ListCategory',
        action: 'listAllCategory'
    },
    {
        query: {
            method: 'GET'
        }
    });
    this.getCategory = function (obj) {
        return listCategories.query(obj);
    };

    var listCategoriesQuestionBank = $resources(':controller/:action',{
            controller: 'categoryWiseQuestion',
            action: 'QuestionAnswerCategoryWise'
        },
        {
            query: {
                method: 'GET'
            }
        });
    this.getCategoryQuestionBank = function (obj) {
        return listCategoriesQuestionBank.query(obj);
    };

}

