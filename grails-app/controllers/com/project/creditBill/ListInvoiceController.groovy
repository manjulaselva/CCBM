package com.project.creditBill

import com.project.creditBill.action.ListingInvoice
import com.project.creditBill.pojos.Invoice
import grails.

class ListInvoiceController
{
    def listBill= new ListingInvoice()

    ArrayList<Invoice> listAllBills()
    {
        ArrayList<Invoice> questions=listBill.readBill()
        def result=[Questions:questions.collect {[
                question:it.question,
                createdBy:it.createdBy,
                createdOnDisplay:it.createdOn,
                createdOn:formattedCreatedOn.getFormattedCreatedOn(it.createdOn),
                categoryName:it.categoryName,
                questionId:it.questionId,
                answerPresent: CheckAnswer.AnswerChecking(it.questionId)
        ]}]
        render result as JSON
        }

}
