package com.project.creditBill.utilities;


import java.sql.*;

public class CreditService
{
    public static String createBill(String Billing_Date, String Billed_Amount,String Payment_Date,String Payment,String Notes) throws SQLException
    {
        Connection dbConnection = null;
        PreparedStatement ps = null;
        String result="Success";
        try
        {
            dbConnection = ConnectionUtils.getConnection();
                    String query = "INSERT INTO billDetails (Bill_No, Billing_Date, Billed_Amount, Payment_Date,Payment,Notes ) " + "VALUES (?,?,?,?,?,?)";
                    ps = dbConnection.prepareStatement(query);
                    String billId = IDGenerator.getGeneratedId();
                    ps.setString(1, billId);
                    ps.setString(2, Billing_Date);
                    ps.setString(3, Billed_Amount);
                    ps.setString(4,Payment_Date);
                    ps.setString(5, Payment);
                    ps.setString(6, Notes);
                    ps.executeUpdate();
                    System.out.println("Bill insertion executed successfully!!");
        }
        catch (Exception e)
        {
            System.out.println(e);
            result="Error while creating Bill" + e.getMessage();
        }
        finally
        {

            if (ps != null)
            {
                ps.close();
            }

            if (dbConnection != null)
            {
                dbConnection.close();
            }
        }
        return result;
    }

}