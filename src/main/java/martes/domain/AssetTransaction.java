package martes.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class AssetTransaction extends BaseModel {
	
	@ManyToOne
	private Asset asset;
	private Double cost;
	private Double bookCost;
	private Double taxCost;
	private Double income; 
	private Double bookIncome;
	private Double taxIncome;
	private Date date;
	private String description;
	public Asset getAsset() {
		return asset;
	}
	public void setAsset(Asset asset) {
		this.asset = asset;
	}
	public Double getCost() {
		return cost;
	}
	public void setCost(Double cost) {
		this.cost = cost;
	}
	public Double getBookCost() {
		return bookCost;
	}
	public void setBookCost(Double bookCost) {
		this.bookCost = bookCost;
	}
	public Double getTaxCost() {
		return taxCost;
	}
	public void setTaxCost(Double taxCost) {
		this.taxCost = taxCost;
	}
	public Double getIncome() {
		return income;
	}
	public void setIncome(Double income) {
		this.income = income;
	}
	public Double getBookIncome() {
		return bookIncome;
	}
	public void setBookIncome(Double bookIncome) {
		this.bookIncome = bookIncome;
	}
	public Double getTaxIncome() {
		return taxIncome;
	}
	public void setTaxIncome(Double taxIncome) {
		this.taxIncome = taxIncome;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
