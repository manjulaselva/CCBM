/*
* *****************************************************************************
 	Copyright 2018 Harman Connected Services
  *****************************************************************************
* */
package com.project.creditBill.utilities;

import java.sql.*;


public class ConnectionUtils
{
    private static ConnectionUtils instance = null;
    private static Connection conn;
    private ConnectionUtils()
    {
        String url = "jdbc:mysql://127.0.0.1:3306/CCBMS?noAccessToProcedureBodies=true";
        String driver = "com.mysql.jdbc.Driver";
        String userName = "CCBMS";
        String password = "CCBMS@123";

        try
        {
            Class.forName(driver);
            conn = DriverManager.getConnection(url,userName, password);
            System.out.println("Successfully Connected!!");
        }

        catch(ClassNotFoundException cnfErr)
        {
            cnfErr.printStackTrace();
        }
        catch(SQLException err)
        {
            err.printStackTrace();
        }
    }

    public static ConnectionUtils getInstance()
    {
        if(instance == null)
        {
            return new ConnectionUtils();
        }
        else
        {
            return instance;
        }
    }

    public static Connection getConnection()
    {
        getInstance();
        return conn;
    }
}
