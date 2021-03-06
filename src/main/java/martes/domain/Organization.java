package martes.domain;

import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Organization extends BaseModel {

	private String name;
	private String officialName;
	private String description;
	@OneToMany(mappedBy = "organization")
	private Set<Company> companies;
	@Version
	@JsonIgnore
	private Long version;	
	
	public Organization() {}
	
	public Organization(String name, String officialName, String description) {
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
	public Set<Company> getCompanies() {
		return companies;
	}
	public void setCompanies(Set<Company> companies) {
		this.companies = companies;
	}	
	
}
