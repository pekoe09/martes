package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.Organization;

public interface EntityRepository extends JpaRepository<Organization, Long> {

}
