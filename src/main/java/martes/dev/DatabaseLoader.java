package martes.dev;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import martes.domain.Asset;
import martes.repositories.AssetRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {
	
	@Autowired
	private AssetRepository assetRepository;
	
	@Override
	public void run(String ...strings) throws Exception {
		System.out.println("Populating database");
		assetRepository.save(new Asset("Kone 1"));
		assetRepository.save(new Asset("Kone 2"));
		assetRepository.save(new Asset("Kone 3"));
		assetRepository.save(new Asset("Kone 4"));
		assetRepository.save(new Asset("Kone 5"));
	}

}
