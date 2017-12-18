package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.AssetType;

public interface AssetTypeRepository extends JpaRepository<AssetType, Long> {

}
