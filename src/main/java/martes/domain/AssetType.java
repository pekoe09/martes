package martes.domain;

import javax.persistence.Entity;

@Entity
public class AssetType extends BaseModel {
	
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}	

}
