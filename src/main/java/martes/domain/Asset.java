package martes.domain;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Asset  extends BaseModel {
	
	private String name;
	private String extId1;
	private String extId2;
	@ManyToOne
	private Company company;
	@ManyToOne
	private AssetType assetType;
	private Double depreciationRate; 
	private Integer lastFY;	
	@OneToMany(mappedBy = "asset")
	private Set<AssetTransaction> transactions;
	@ManyToOne
	private DepreciationRule depreciationRule;
	@OneToMany(mappedBy = "asset")
	private Set<DepreciationPost> depreciationPosts;
	
	public Asset() {}
	
	public Asset(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getExtId1() {
		return extId1;
	}

	public void setExtId1(String extId1) {
		this.extId1 = extId1;
	}

	public String getExtId2() {
		return extId2;
	}

	public void setExtId2(String extId2) {
		this.extId2 = extId2;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public AssetType getAssetType() {
		return assetType;
	}

	public void setAssetType(AssetType assetType) {
		this.assetType = assetType;
	}

	public Double getDepreciationRate() {
		return depreciationRate;
	}

	public void setDepreciationRate(Double depreciationRate) {
		this.depreciationRate = depreciationRate;
	}

	public Integer getLastFY() {
		return lastFY;
	}

	public void setLastFY(Integer lastFY) {
		this.lastFY = lastFY;
	}

	public Set<AssetTransaction> getTransactions() {
		return transactions;
	}

	public void setTransactions(Set<AssetTransaction> transactions) {
		this.transactions = transactions;
	}

	public DepreciationRule getDepreciationRule() {
		return depreciationRule;
	}

	public void setDepreciationRule(DepreciationRule depreciationRule) {
		this.depreciationRule = depreciationRule;
	}

	public Set<DepreciationPost> getDepreciationPosts() {
		return depreciationPosts;
	}

	public void setDepreciationPosts(Set<DepreciationPost> depreciationPosts) {
		this.depreciationPosts = depreciationPosts;
	}
	
}
