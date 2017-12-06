package martes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import martes.domain.Organization;

public interface OrganizationRepository extends JpaRepository<Organization, Long> {

}
