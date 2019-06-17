/*
* *****************************************************************************
 	Copyright 2019 Harman Connected Services
  *****************************************************************************
* */
package com.project.creditBill.utilities;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.Types;

public class IDGenerator
{
    public static String getGeneratedId()
    {
        String out="";
        Connection conn= ConnectionUtils.getConnection();
        try
        {
            CallableStatement statement = conn.prepareCall("{? = call billDetails_sequence_function()}");
            statement.registerOutParameter(1, Types.VARCHAR);
            statement.execute();
             out=statement.getString(1);
            System.out.println("generated sequence " +out);

        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return out;
    }

}