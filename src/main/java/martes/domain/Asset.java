package martes.domain;

import javax.persistence.Entity;

@Entity
public class Asset  extends BaseModel {
	
	private String name;
	
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
}
