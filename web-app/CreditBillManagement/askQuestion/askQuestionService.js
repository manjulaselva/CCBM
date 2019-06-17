/*
* *****************************************************************************
 	Copyright 2019 Harman Connected Services
  *****************************************************************************
* */
angular.module("Sanchaar")
    .service("askQuestionService", ['$q', '$resource', askQuestionService]);
function askQuestionService($q, $resources) {
    var putQuestionToDB = $resources(':controller/:action',
        {  controller: 'Question',  action: 'questionPostedByUser'}, { save: {method: 'POST', isArray: false} });

    this.putQuestionToDB = function (obj) {
        return putQuestionToDB.save(obj);
    };
}