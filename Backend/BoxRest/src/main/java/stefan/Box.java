package stefan;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
 

@SuppressWarnings("restriction")
@XmlRootElement(name = "box")
@XmlAccessorType(XmlAccessType.FIELD)
public class Box {
	private int idboxes;


	private String name;
	private double shippingcost;
	private String color;
	private int weight;

	public Box() {
		
	}
	
	public Box(String name, double shippingcost, String color, int weight) {
		this.name = name;
		this.shippingcost = shippingcost;
		this.color = color;
		this.weight = weight;
	}
	
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getshippingcost() {
		return shippingcost;
	}

	public void setshippingcost(double shippingcost) {
		this.shippingcost = shippingcost;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}


	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getIdboxes() {
		return idboxes;
	}

	public void setIdboxes(int idboxes) {
		this.idboxes = idboxes;
	}
}


