package stefan;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class BoxDAO {


	public Connection conn = null;

	

	public Box addBox(Box box) {
		try {
			makeJDBCConnection();
			String insertQueryStatement = "INSERT INTO Boxes (name,weight,color,shippingcost)  VALUES  (?,?,?,?)";
			PreparedStatement prepState = conn.prepareStatement(insertQueryStatement);
			prepState.setString(1, box.getName());
			prepState.setInt(2, box.getWeight());
			prepState.setString(3, box.getColor());
			prepState.setDouble(4, box.getshippingcost());
			prepState.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return box;
	}

	public List<Box> getAllBoxes() {
		List<Box> list = new ArrayList<Box>();
		try {
			makeJDBCConnection();
			String query = "SELECT * FROM Boxes";
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			while (rs.next()) {
				Box box = new Box(rs.getString("name"), rs.getDouble("shippingcost"), rs.getString("color"),
						rs.getInt("weight"));
				box.setIdboxes(rs.getInt("idboxes"));
				list.add(box);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}

	public void makeJDBCConnection() {

		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
			return;
		}
		try {
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/boxesdb?user=root&password=1122");
		} catch (SQLException e) {
			e.printStackTrace();
			return;
		}
	}

}