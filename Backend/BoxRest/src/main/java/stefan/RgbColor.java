package stefan;

public class RgbColor {
	int r = 0;
	int g = 0;
	int b = 0;

	
	public RgbColor() {
		
	}
	
	public RgbColor(int r, int g, int b) {
		super();
		this.r = r;
		this.g = g;
		this.b = b;

	}
	public int getR() {
		return r;
	}
	public void setR(int r) {
		this.r = r;
	}
	public int getG() {
		return g;
	}
	public void setG(int g) {
		this.g = g;
	}
	public int getB() {
		return b;
	}
	public void setB(int b) {
		this.b = b;
	}
}
