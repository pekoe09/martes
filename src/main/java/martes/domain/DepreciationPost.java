package martes.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class DepreciationPost extends BaseModel {

	@ManyToOne
	private Asset asset;
	@ManyToOne
	private DepreciationRule depreciationRule;
	private Date date;
	private Double amount;
	private Double bookAmount;
	private Double taxAmount;
	
	public Asset getAsset() {
		return asset;
	}
	public void setAsset(Asset asset) {
		this.asset = asset;
	}
	
	public DepreciationRule getDepreciationRule() {
		return depreciationRule;
	}
	public void setDepreciationRule(DepreciationRule depreciationRule) {
		this.depreciationRule = depreciationRule;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public Double getBookAmount() {
		return bookAmount;
	}
	public void setBookAmount(Double bookAmount) {
		this.bookAmount = bookAmount;
	}
	public Double getTaxAmount() {
		return taxAmount;
	}
	public void setTaxAmount(Double taxAmount) {
		this.taxAmount = taxAmount;
	}	
	
}
