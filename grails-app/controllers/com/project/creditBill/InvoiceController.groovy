package com.project.creditBill
import com.project.creditBill.utilities.CreditService

class InvoiceController
{
    def springSecurityService

    def creditService = new CreditService()

    def billCreatedByUser()
    {

        def params = request.JSON
        def result = creditService.createBill(params.Billing_Date, params.Billed_Amount,params.Payment_Date,params.Payment,params.Notes)
        render result as String
    }
}
