package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.AssetTransaction;

public interface AssetTransactionRepository extends JpaRepository<AssetTransaction, Long> {

}
