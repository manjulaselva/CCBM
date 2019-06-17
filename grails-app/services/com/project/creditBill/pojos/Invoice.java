package com.project.creditBill.pojos;



public class Invoice {


    private String Bill_No;
    private String Billed_Amount;
    private String Billing_Date;
    private String Payment_Date;
    private String Payment;
    private String Notes;

    public Invoice(String Bill_No,  String Billing_Date, String Billed_Amount, String Payment_Date, String Payment, String Notes) {

        setBill_No(Bill_No);
        setBilling_Date(Billing_Date);
        setBilled_Amount(Billed_Amount);
        setPayment_Date(Payment_Date);
        setPayment(Payment);
        setNotes(Notes);
    }

    public String getBill_No() {
        return Bill_No;
    }

    public void setBill_No(String bill_No) {
        this.Bill_No = bill_No;
    }

    public String getBilled_Amount() {
        return Billed_Amount;
    }

    public void setBilled_Amount(String billed_Amount) {
        this.Billed_Amount = billed_Amount;
    }

    public String getBilling_Date() {
        return Billing_Date;
    }

    public void setBilling_Date(String billing_Date) {
        this.Billing_Date = billing_Date;
    }

    public String getPayment_Date() {
        return Payment_Date;
    }

    public void setPayment_Date(String payment_Date) {
        this.Payment_Date = payment_Date;
    }

    public String getPayment() {
        return Payment;
    }

    public void setPayment(String payment) {
        this.Payment = payment;
    }

    public String getNotes() {
        return Notes;
    }

    public void setNotes(String notes) {
        this.Notes = notes;
    }


}
