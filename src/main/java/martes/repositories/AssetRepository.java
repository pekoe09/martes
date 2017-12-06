package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.Asset;

public interface AssetRepository extends JpaRepository<Asset, Long> {

}
