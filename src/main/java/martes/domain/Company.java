package martes.domain;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Company extends BaseModel {

	private String name;
	private String officialName;
	private String description;
	@ManyToOne
	private Organization organization;
	@OneToMany(mappedBy = "company")
	private Set<Asset> assets;
	@Version
	@JsonIgnore
	private Long version;	
	
	public Company() {}
	
	public Company(String name, String officialName, String description) {
		this.name = name;
		this.officialName = officialName;
		this.description = description;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getOfficialName() {
		return officialName;
	}
	public void setOfficialName(String officialName) {
		this.officialName = officialName;
	}	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}	
	public Organization getOrganization() {
		return organization;
	}
	public void setOrganization(Organization organization) {
		this.organization = organization;
	}
	public Long getVersion() {
		return version;
	}
	public void setVersion(Long version) {
		this.version = version;
	}	
	
}
