/*
* *****************************************************************************
 	Copyright 2019 Harman Connected Services
  *****************************************************************************
* */
package com.project.creditBill.action;
import com.project.creditBill.pojos.Invoice;
import com.project.creditBill.utilities.ConnectionUtils;

import java.sql.*;
import java.util.ArrayList;

public class ListingInvoice
{


        public static ArrayList<Invoice> readBill() throws SQLException
    {
        Connection dbConnection = null;
        PreparedStatement ps = null;
        ArrayList<Invoice>  results1=new ArrayList<Invoice>();
        try {
            dbConnection = ConnectionUtils.getConnection();
            ps = dbConnection.prepareStatement("SELECT  Bill_No,Billing_Date,Billed_Amount,Payment_Date, Payment,Notes FROM billDetails order by Bill_No desc ");
            ResultSet result = ps.executeQuery();
            while (result.next()) {
                String Bill_No =result.getString("Bill_No");
                String Billing_Date = result.getString("Billing_Date");
                String Billed_Amount = result.getString("Billed_Amount");
                String Payment_Date = result.getString("Payment_Date");
                String Payment = result.getString("Payment");
                String Notes = result.getString("Notes");

                    Invoice invoice1 = new Invoice(Bill_No,Billing_Date,Billed_Amount,Payment_Date, Payment,Notes);
                    results1.add(invoice1);
                    System.out.println("Bill_No :-" + Bill_No);
                    System.out.println("Billing_Date :-" + Billing_Date);
                    System.out.println("Billed_Amount :-" + Billed_Amount);
                    System.out.println("Payment_Date :-" + Payment_Date);
                    System.out.println("Payment :-" + Payment);
                    System.out.println("Notes :-" + Notes);
                }

        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        finally
        {
            if (ps != null)
            {
                try
                {
                    ps.close();
                }
                catch (SQLException e)
                {
                    e.printStackTrace();
                }
            }
        }
        return results1;
    }


}




