package servlet;

import java.util.*;
import java.sql.*;
import model.User;

public class DB {
	
	String driver = "com.mysql.cj.jdbc.Driver";
	String url = "jdbc:mysql://localhost:3306/greatoutdoorsdb";
	String userName = "root";
	String password = "samith@12";
	String query = "select * from user";
	
	List<User> userList;
	
	public Connection getConnection(){
		
		Connection con = null;
		
		try {
			Class.forName(driver);
			
			con = DriverManager.getConnection(url, userName, password);
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return con;
		
	}

	public List<User> getUser(){
		
		Connection con = getConnection();
		
		try {
			
			Statement statement = con.createStatement();
			
			ResultSet userSet = statement.executeQuery(query);
			
			userList = new ArrayList<User>();
			
			while(userSet.next()){
				
				User user = new User();
				
				user.setId(userSet.getInt(1));
				user.setFirstName(userSet.getString(2));
				user.setLastName(userSet.getString(3));
				user.setPhone(userSet.getInt(4));
				user.setEmail(userSet.getString(5));
				user.setPassword(userSet.getString(6));
				user.setAddressLine1(userSet.getString(7));
				user.setAddressLine2(userSet.getString(8));
				user.setState(userSet.getString(9));
				user.setPincode(userSet.getInt(10));
				
				userList.add(user);
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
			return null;
			
		}
		
		return userList;
		
	}
}
