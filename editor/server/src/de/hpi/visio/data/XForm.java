package de.hpi.visio.data;

import org.oryxeditor.server.diagram.Point;
import org.xmappr.Element;
import org.xmappr.RootElement;

@RootElement("XForm")
public class XForm {
	
	/*	Interpreting Visio XForm values	
	 * 
	 * 	y increases
	 *  ^
	 *	|
	 *	|
	 *	|
	 *	-----------> x increases
	 *
	 *	PINs are at the center: *
	 *	-----------------
	 *	|				|
	 *	|				|
	 *	|		* 		|
	 *	|				|
	 *	|				|
	 *	-----------------
	 *
	 *
	 *
	 *	The oryx canvas
	 *	
	 *	------------> x increas
	 *	|
	 *	|
	 *	|
	 *	|
	 *	v y increases
	 *
	 */
	
	@Element("PinX")
	public PinX positionX;
	
	@Element("PinY")
	public PinY positionY;
	
	@Element("Width")
	public Width width;
	
	@Element("Height")
	public Height height;
	
	public Point getUpperLeftPointForPage(Page visioPage) {
		Double upperLeftX = getX() - (getWidth() / 2);
		Double upperLeftY = visioPage.getHeight() - (getY() + (getHeight() / 2));
		return new Point(upperLeftX, upperLeftY);
	}
	
	public Point getUpperLeftVisioPoint() {
		Double upperLeftX = getX() - (getWidth() / 2);
		Double upperLeftY = getY() + (getHeight() / 2);
		return new Point(upperLeftX, upperLeftY);
	}
	
	public Point getLowerRightPointForPage(Page visioPage) {
		Double lowerRightX = getX() + (getWidth() / 2);
		Double lowerRightY = visioPage.getHeight() - (getY() - (getHeight() / 2));
		return new Point(lowerRightX, lowerRightY);
	}
	
	public Point getLowerRightVisioPoint() {
		Double lowerRightX = getX() + (getWidth() / 2);
		Double lowerRightY = getY() - (getHeight() / 2);
		return new Point(lowerRightX, lowerRightY);
	}
	
	public Double getHeight() {
		return height.getHeight();
	}
	
	public Double getWidth() {
		return width.getWidth();
	}
	
	public Double getX() {
		return positionX.getX();
	}
	
	public Double getY() {
		return positionY.getY();
	}
	
	public Point getCentralPin() {
		return new Point(positionX.getX(), positionY.getY());
	}

	public void setWidth(Double width2) {
		width.setWidth(width2);
	}

	public void setHeight(Double height2) {
		height.setHeight(height2);
	}

	public void setCentralPin(Point newPin) {
		positionX.setX(newPin.getX());
		positionY.setY(newPin.getY());
	}

}
