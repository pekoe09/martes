package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.DepreciationRule;

public interface DepreciationRuleRepository extends JpaRepository<DepreciationRule, Long> {

}
